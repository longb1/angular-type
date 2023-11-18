import { TestBed } from '@angular/core/testing';

import { GenerateQuoteService } from './generate-quote.service';

describe('QenerateQuoteService', () => {
  let service: GenerateQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
