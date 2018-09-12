import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkUserProfileComponent } from './vk-user-profile';
import { VkFirebaseModule } from '@angular6/vk-firebase';
import { VkUserProfileService } from './vk-user-profile.service';
@NgModule({
  imports: [
      CommonModule,
      VkFirebaseModule
    ],
  declarations: [VkUserProfileComponent],
  exports: [VkUserProfileComponent],
  providers: [VkUserProfileService]
})
export class VkUserProfileModule {}
