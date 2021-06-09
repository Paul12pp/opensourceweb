import { TestBed } from '@angular/core/testing';

import { PuestoService } from './puesto.service';

describe('PuestoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuestoService = TestBed.get(PuestoService);
    expect(service).toBeTruthy();
  });
});
