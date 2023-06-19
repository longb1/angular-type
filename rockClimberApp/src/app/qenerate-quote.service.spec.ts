import { TestBed } from '@angular/core/testing';

import { QenerateQuoteService } from './qenerate-quote.service';

describe('QenerateQuoteService', () => {
  let service: QenerateQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QenerateQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
