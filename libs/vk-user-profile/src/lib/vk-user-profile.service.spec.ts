import { TestBed, inject } from '@angular/core/testing';

import { VkUserProfileService } from './vk-user-profile.service';

describe('VkUserProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkUserProfileService]
    });
  });

  it('should be created', inject([VkUserProfileService], (service: VkUserProfileService) => {
    expect(service).toBeTruthy();
  }));
});
