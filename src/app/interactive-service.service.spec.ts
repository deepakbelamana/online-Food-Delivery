import { TestBed } from '@angular/core/testing';

import { InteractiveServiceService } from './interactive-service.service';

describe('InteractiveServiceService', () => {
  let service: InteractiveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractiveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
