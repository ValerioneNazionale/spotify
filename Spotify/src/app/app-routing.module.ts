
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {ModificaComponent} from "./features/modifica/modifica.component";
import {ErrorComponent} from "./features/error/error.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'modifica', component: ModificaComponent,  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


