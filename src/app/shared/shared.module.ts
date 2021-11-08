import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageDirective } from './directives/errmsg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMessageDirective,
    CustomIfDirective
  ],
  exports:[
    ErrorMessageDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
