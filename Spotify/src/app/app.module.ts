import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./features/home/home.module";
import {ModificaModule} from "./features/modifica/modifica.module";



@NgModule({
  declarations: [
    AppComponent,

  ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        HomeModule,
        ModificaModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
