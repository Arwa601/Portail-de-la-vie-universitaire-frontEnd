import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant.component';
import { EtudiantsRoutingModule } from './etudiant-routing.module';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EtudiantsRoutingModule,
  ]
})
export class EtudiantModule { }
