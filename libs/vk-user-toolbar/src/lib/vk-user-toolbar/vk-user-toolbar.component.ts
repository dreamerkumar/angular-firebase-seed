import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { VkAuthenticationService } from '@angular6/vk-authentication';

@Component({
  selector: 'vk-user-toolbar',
  templateUrl: './vk-user-toolbar.component.html',
  styleUrls: ['./vk-user-toolbar.component.scss']
})
export class VkUserToolbarComponent implements OnInit {
  user: any;
  navigationSubscription: any;

  constructor(
    private router: Router,
    private authService: VkAuthenticationService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.setData();
      }
    });
  }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToUserData() {
    this.router.navigate(['/user-data']);
  }

  goToUserProfile() {
    this.router.navigate(['/user-profile']);
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
