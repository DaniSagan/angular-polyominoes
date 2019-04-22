import { TestBed, inject } from '@angular/core/testing';

import { PolyominoService } from './polyomino.service';

describe('PolyominoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolyominoService]
    });
  });

  it('should be created', inject([PolyominoService], (service: PolyominoService) => {
    expect(service).toBeTruthy();
  }));
});
