import { TestBed } from '@angular/core/testing';

import { SerCategoryService } from './ser-category.service';

describe('SerCategoryService', () => {
  let service: SerCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
