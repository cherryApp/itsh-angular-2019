import { TestBed } from '@angular/core/testing';

import { FormGeneratoService } from './form-generato.service';

describe('FormGeneratoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormGeneratoService = TestBed.get(FormGeneratoService);
    expect(service).toBeTruthy();
  });
});
