import { TestBed, inject } from '@angular/core/testing';

import { VkAuthenticationService } from './vk-authentication.service';

describe('VkAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkAuthenticationService]
    });
  });

  it('should be created', inject([VkAuthenticationService], (service: VkAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
