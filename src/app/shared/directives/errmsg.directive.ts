import { Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMessageDirective implements OnInit{

  private _color: string = "red";

  public htmlElement: ElementRef<HTMLElement> 

  @Input() set color(value:string) {
    this.htmlElement.nativeElement.style.color=value;
    this._color=value;
  }
  @Input() message: string = ""; 

  constructor(private el:ElementRef<HTMLElement>) {
    this.htmlElement=el;
  }
  
  ngOnInit(): void {
    this.addStyle();
  }

  addStyle(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
    console.log("clase cambiada");
  }

}
