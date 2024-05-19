import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EtudiantComponent } from './Etudiant/etudiant.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'etudiants/:id', component: EtudiantComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
