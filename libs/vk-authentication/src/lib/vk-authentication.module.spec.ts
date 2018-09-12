import { async, TestBed } from '@angular/core/testing';
import { VkAuthenticationModule } from './vk-authentication.module';

describe('VkAuthenticationModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [VkAuthenticationModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(VkAuthenticationModule).toBeDefined();
  });
});
