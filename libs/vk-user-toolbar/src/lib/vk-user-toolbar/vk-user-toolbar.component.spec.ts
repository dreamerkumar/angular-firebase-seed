import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkUserToolbarComponent } from './vk-user-toolbar.component';

describe('VkUserToolbarComponent', () => {
  let component: VkUserToolbarComponent;
  let fixture: ComponentFixture<VkUserToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkUserToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkUserToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
