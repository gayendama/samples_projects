import { TestBed } from '@angular/core/testing';

import { ObjetServiceService } from './objet-service.service';

describe('ObjetServiceService', () => {
  let service: ObjetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
