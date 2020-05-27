import { TestBed } from '@angular/core/testing';

import { SubmitrecipeService } from './submitrecipe.service';

describe('SubmitrecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitrecipeService = TestBed.get(SubmitrecipeService);
    expect(service).toBeTruthy();
  });
});
