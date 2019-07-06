import { TestBed } from '@angular/core/testing';

import { InserirAlunoService } from './inserir-aluno.service';

describe('InserirAlunoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InserirAlunoService = TestBed.get(InserirAlunoService);
    expect(service).toBeTruthy();
  });
});
