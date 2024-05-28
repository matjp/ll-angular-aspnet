import { TestBed } from '@angular/core/testing';

import { BookItemService } from './book-item.service';

describe('BookItemService', () => {
  let service: BookItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
