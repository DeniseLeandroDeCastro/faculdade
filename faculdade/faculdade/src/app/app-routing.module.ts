import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroAlunoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'cadastro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
