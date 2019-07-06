import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InserirAlunoService {

  constructor(private http: HttpClient) { }
  getAlunos(): Observable<Aluno[]> {
    const url = `${environment.alunoUrl}/aluno`;
    return this.http.get<Aluno[]>(url);
  }

  getAluno(matricula: number): Observable<Aluno> {
    const url = `${environment.alunoUrl}/aluno/${matricula}`;
    return this.http.get<Aluno>(url);
  }

  addAluno(aluno: Aluno): Observable<Aluno> {
    const url = `${environment.alunoUrl}/aluno/`;
    return this.http.post<Aluno>(url, aluno);
  }

  atualizaAluno(aluno: Aluno): Observable<Aluno> {
    const url = `${environment.alunoUrl}/aluno/${aluno.matricula}`;
    return this.http.put<Aluno>(url, aluno);
  }

  deletaAluno(matricula: number): Observable<Aluno> {
    const url = `${environment.alunoUrl}/aluno/${matricula}`;
    return this.http.delete<Aluno>(url);
  }
}
