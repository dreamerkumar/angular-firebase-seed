import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';


import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment'; 
import { AppRoutingModule } from './app-routing.module';
import { VkUserToolbarModule } from '@angular6/vk-user-toolbar';
import { VkUserDataModule } from '@angular6/vk-user-data';
import { HomeComponent } from './home.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
      BrowserModule, 
      NxModule.forRoot(),
      AngularFireModule.initializeApp(firebaseConfig),
      AppRoutingModule,
      VkUserToolbarModule,
      VkUserDataModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
