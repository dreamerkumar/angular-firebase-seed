import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
      CommonModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFirestoreModule
    ]
})
export class VkFirebaseModule {}
