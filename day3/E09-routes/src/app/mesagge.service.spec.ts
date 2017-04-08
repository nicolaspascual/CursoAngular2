/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MesaggeService } from './mesagge.service';

describe('MesaggeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesaggeService]
    });
  });

  it('should ...', inject([MesaggeService], (service: MesaggeService) => {
    expect(service).toBeTruthy();
  }));
});
