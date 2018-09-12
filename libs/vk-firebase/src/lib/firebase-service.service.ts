import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}
}
