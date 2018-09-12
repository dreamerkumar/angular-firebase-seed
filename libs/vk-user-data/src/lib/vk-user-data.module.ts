import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkUserDataComponent, VkUserDataService } from './vk-user-data';
import { VkFirebaseModule } from '@angular6/vk-firebase';
import { VkAuthenticationModule } from '@angular6/vk-authentication';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      VkFirebaseModule,
      VkAuthenticationModule,
      FormsModule
    ],
  declarations: [VkUserDataComponent],
  exports: [VkUserDataComponent],
  providers: [VkUserDataService]
})
export class VkUserDataModule {}
