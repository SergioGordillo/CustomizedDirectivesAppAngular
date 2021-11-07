import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageDirective } from './directives/errmsg.directive';



@NgModule({
  declarations: [
    ErrorMessageDirective
  ],
  exports:[
    ErrorMessageDirective
  ]
})
export class SharedModule { }
