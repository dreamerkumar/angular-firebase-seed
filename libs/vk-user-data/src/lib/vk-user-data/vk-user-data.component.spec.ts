import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkUserDataComponent } from './vk-user-data.component';

describe('VkUserDataComponent', () => {
  let component: VkUserDataComponent;
  let fixture: ComponentFixture<VkUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
