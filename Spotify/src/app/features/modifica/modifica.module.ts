import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificaComponent } from './modifica.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ModificaComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

    ]
})
export class ModificaModule { }
