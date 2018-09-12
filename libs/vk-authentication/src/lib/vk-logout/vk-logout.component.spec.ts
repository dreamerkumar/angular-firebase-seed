import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkLogoutComponent } from './vk-logout.component';

describe('VkLogoutComponent', () => {
  let component: VkLogoutComponent;
  let fixture: ComponentFixture<VkLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
