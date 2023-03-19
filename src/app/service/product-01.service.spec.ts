import { TestBed } from '@angular/core/testing';

import { Product01Service } from './product-01.service';

describe('Product01Service', () => {
  let service: Product01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Product01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
