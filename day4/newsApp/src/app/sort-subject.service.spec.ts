/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SortSubjectService } from './sort-subject.service';

describe('SortSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortSubjectService]
    });
  });

  it('should ...', inject([SortSubjectService], (service: SortSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
