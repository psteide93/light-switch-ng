import { TestBed } from '@angular/core/testing';

import { LightSwitchServiceService } from './light-switch-service.service';

describe('LightSwitchServiceService', () => {
  let service: LightSwitchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightSwitchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
