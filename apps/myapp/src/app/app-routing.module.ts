import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {
  VkLoginComponent,
  VkAuthenticationGuard
} from '@angular6/vk-authentication';
import { VkUserProfileComponent } from '@angular6/vk-user-profile';
import { VkUserDataComponent } from '@angular6/vk-user-data';
import { HomeComponent } from './home.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: VkLoginComponent },
  {
    path: 'user-profile',
    component: VkUserProfileComponent,
    canActivate: [VkAuthenticationGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'user-data',
    component: VkUserDataComponent,
    canActivate: [VkAuthenticationGuard],
    runGuardsAndResolvers: 'always'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      useHash: false,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
