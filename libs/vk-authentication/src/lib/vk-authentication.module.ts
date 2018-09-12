import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkFirebaseModule } from '@angular6/vk-firebase';
import { VkAuthenticationService } from './vk-authentication.service';
import { VkUserProfileModule } from '@angular6/vk-user-profile';
import { VkAuthenticationGuard } from './vk-authentication.guard';
import { VkLoginComponent } from './vk-login';
import { VkLogoutComponent } from './vk-logout';
@NgModule({
  imports: [
      CommonModule,
      VkFirebaseModule,
      VkUserProfileModule
    ],
  declarations: [
      VkLoginComponent,
      VkLogoutComponent
  ],
  exports: [
    VkLoginComponent,
    VkLogoutComponent
  ],
  providers: [VkAuthenticationService, VkAuthenticationGuard]
})
export class VkAuthenticationModule {}
