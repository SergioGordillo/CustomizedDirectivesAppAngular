import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMessageDirective implements OnInit {

  constructor() { console.log("Constructor on init"); }
  
  ngOnInit(): void {
    console.log("Directive on init");
  }

}
