import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasicFormComponent],
  exports: [BasicFormComponent]
})
export class FormModule { }
