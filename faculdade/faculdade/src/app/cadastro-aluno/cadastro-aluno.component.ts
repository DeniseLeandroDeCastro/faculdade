import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  aluno: any = {
    matricula: 0,
    nomealuno: '',
    nomecurso: '',
    periodo: 0
  }

  onSubmit(form) {
    console.log(form);
  }

  constructor(private http: HttpClientModule){

  }

  ngOnInit(){}

  consultaMatricula(matricula) {
    // Variável matricula somente com dígitos.,
    matricula = matricula.replace(/\D/g, '');
  }
}
