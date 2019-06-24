import { TestBed } from '@angular/core/testing';

import { DembowLibraryService } from './dembow-library.service';

describe('DembowLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DembowLibraryService = TestBed.get(DembowLibraryService);
    expect(service).toBeTruthy();
  });
});
