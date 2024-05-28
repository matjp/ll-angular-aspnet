import { TestBed } from '@angular/core/testing';

import { BookGridService } from './book-grid.service';

describe('BookGridService', () => {
  let service: BookGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
