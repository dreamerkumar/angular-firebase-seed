import { Injectable } from '@angular/core';
import { VkAuthenticationService } from '@angular6/vk-authentication';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserData } from './user-data.model';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'firebase';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
const collectionName: string = 'userData';

@Injectable({
  providedIn: 'root'
})
export class VkUserDataService {
  constructor(
    private authService: VkAuthenticationService,
    private angularFirestore: AngularFirestore
  ) {}

  getList() {
    return this.authService.getUser().pipe(
      switchMap(user => {
        if(!user){
            return of(null);
        }
        return this.angularFirestore
          .collection<UserData>(collectionName, ref =>
            ref.where('uid', '==', user.uid)
          )
          .snapshotChanges()
          .pipe(
            map(arr => {
              return arr.map(snap => {
                const data = snap.payload.doc.data();
                const id = snap.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      })
    );
  }

  add(dataItemToAdd: string) {
    return this.authService.getUser().pipe(
      take(1),
      switchMap((user: User) => {
        const data: UserData = {
          uid: user.uid,
          dataItem: dataItemToAdd
        };
        return this.angularFirestore
          .collection<UserData>(collectionName)
          .add(data);
      })
    );
  }
}
