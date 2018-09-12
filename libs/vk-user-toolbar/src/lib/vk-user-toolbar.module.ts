import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkUserToolbarComponent } from './vk-user-toolbar';
import { VkFirebaseModule } from '@angular6/vk-firebase';
import { VkAuthenticationModule } from '@angular6/vk-authentication';
@NgModule({
  imports: [
      CommonModule,
      VkFirebaseModule,
      VkAuthenticationModule
    ],
  declarations: [VkUserToolbarComponent],
  exports: [VkUserToolbarComponent]
})
export class VkUserToolbarModule {}
