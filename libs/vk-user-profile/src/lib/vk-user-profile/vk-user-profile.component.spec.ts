import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkUserProfileComponent } from './vk-user-profile.component';

describe('VkUserProfileComponent', () => {
  let component: VkUserProfileComponent;
  let fixture: ComponentFixture<VkUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
