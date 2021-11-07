import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMessageDirective implements OnInit {

  public htmlElement: ElementRef<HTMLElement> 
  @Input() color: string = "red"; 
  @Input() message: string = ""; 

  constructor(private el:ElementRef<HTMLElement>) {
    this.htmlElement=el;
  }
  
  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.addClass();
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color=this.color;
  }

  setMessage(): void{
    this.htmlElement.nativeElement.innerHTML=this.message;
  }

  addClass(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
