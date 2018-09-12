import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { VkAuthenticationService } from '../vk-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vk-login',
  templateUrl: './vk-login.component.html',
  styleUrls: ['./vk-login.component.scss']
})
export class VkLoginComponent implements OnInit {

  constructor(
    private authService: VkAuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  googleLogin() {
    this.authService.googleLogin().then(() => this.navigateToHome());
  }

  anonymousLogin() {
    this.authService.anonymousLogin().then(() => this.navigateToHome());
  }
  
  navigateToHome() {
    this.router.navigate(['/']);
  }
}
