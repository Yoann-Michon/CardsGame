import { TestBed } from '@angular/core/testing';

import { CardWebService } from './card-web-service.service';

describe('CardWebServiceService', () => {
  let service: CardWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
