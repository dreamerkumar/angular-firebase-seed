import { Component, OnInit } from '@angular/core';
import { UserData } from './user-data.model';
import { Observable } from 'rxjs';
import { VkUserDataService } from './vk-user-data.service';

@Component({
  selector: 'vk-user-data',
  templateUrl: './vk-user-data.component.html',
  styleUrls: ['./vk-user-data.component.scss']
})
export class VkUserDataComponent implements OnInit {
  dataItemToAdd: string;
  userData$: Observable<UserData[]>;

  constructor(private userDataService: VkUserDataService) {}

  ngOnInit() {
    this.userData$ = this.userDataService.getList();
  }

  add() {
    this.userDataService.add(this.dataItemToAdd).subscribe(
      () => {
        this.dataItemToAdd = null;
      },
      (error) => {
        alert(`Could not add ${error}`);
      }
    );
  }
}
