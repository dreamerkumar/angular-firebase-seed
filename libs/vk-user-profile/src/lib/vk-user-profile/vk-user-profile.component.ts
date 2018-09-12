import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { VkUserProfile } from './vk-user-profile.model';
import { VkUserProfileService } from '../vk-user-profile.service';

@Component({
  selector: 'vk-user-profile',
  templateUrl: './vk-user-profile.component.html',
  styleUrls: ['./vk-user-profile.component.scss']
})
export class VkUserProfileComponent implements OnInit {

  constructor(private userProfileService: VkUserProfileService) {}
  user: any;
  ngOnInit() {
    this.user = this.userProfileService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
