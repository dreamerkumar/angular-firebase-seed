import { async, TestBed } from '@angular/core/testing';
import { VkFirebaseModule } from './vk-firebase.module';

describe('VkFirebaseModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [VkFirebaseModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(VkFirebaseModule).toBeDefined();
  });
});
