import { async, TestBed } from '@angular/core/testing';
import { VkUserToolbarModule } from './vk-user-toolbar.module';

describe('VkUserToolbarModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [VkUserToolbarModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(VkUserToolbarModule).toBeDefined();
  });
});
