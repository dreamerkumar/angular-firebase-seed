import { async, TestBed } from '@angular/core/testing';
import { VkUserDataModule } from './vk-user-data.module';

describe('VkUserDataModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [VkUserDataModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(VkUserDataModule).toBeDefined();
  });
});
