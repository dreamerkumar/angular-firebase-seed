import { async, TestBed } from '@angular/core/testing';
import { VkUserProfileModule } from './vk-user-profile.module';

describe('VkUserProfileModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [VkUserProfileModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(VkUserProfileModule).toBeDefined();
  });
});
