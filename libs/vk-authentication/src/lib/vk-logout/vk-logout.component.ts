import { Component, OnInit } from '@angular/core';

import { VkAuthenticationService } from '../vk-authentication.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'vk-logout',
  templateUrl: './vk-logout.component.html',
  styleUrls: ['./vk-logout.component.scss']
})
export class VkLogoutComponent implements OnInit {
  user: any;
  navigationSubscription: any;

  constructor(
    private authService: VkAuthenticationService,
    private router: Router
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
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/']);
    });
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
