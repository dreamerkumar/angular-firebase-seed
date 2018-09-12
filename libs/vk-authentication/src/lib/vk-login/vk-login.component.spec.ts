import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkLoginComponent } from './vk-login.component';

describe('VkLoginComponent', () => {
  let component: VkLoginComponent;
  let fixture: ComponentFixture<VkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
