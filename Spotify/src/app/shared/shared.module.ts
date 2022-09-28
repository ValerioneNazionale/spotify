import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
    declarations: [
        CardComponent,
        FormComponent
    ],
    exports: [
        CardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
