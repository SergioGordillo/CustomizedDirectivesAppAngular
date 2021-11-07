import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMessageDirective implements OnInit {

  public htmlElement: ElementRef<HTMLElement> 
  color: string = "red"; 

  constructor(private el:ElementRef<HTMLElement>) {
    this.htmlElement=el;
  }
  
  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color=this.color;
  }

}
