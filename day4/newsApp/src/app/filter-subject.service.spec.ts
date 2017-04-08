/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilterSubjectService } from './filter-subject.service';

describe('FilterSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterSubjectService]
    });
  });

  it('should ...', inject([FilterSubjectService], (service: FilterSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
