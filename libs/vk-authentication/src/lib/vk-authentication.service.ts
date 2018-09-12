import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { VkUserProfileService } from '@angular6/vk-user-profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VkAuthenticationService {
  constructor(
    private afAuth: AngularFireAuth,
    private userProfileService: VkUserProfileService,
    private router: Router
  ) {}

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(signInDetails =>
        this.userProfileService.saveUserProfileData(signInDetails)
      );
  }

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously();
  }

  getUser() {
    //active stream to get the user
    //returned value changes to null when the user is loggged out
    return this.afAuth.authState;
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }
}
