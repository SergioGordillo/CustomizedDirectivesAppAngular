import { Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMessageDirective implements OnInit{

  private _color: string = "red";
  private _message: string = "This field is required."

  public htmlElement: ElementRef<HTMLElement> 

  @Input() set color(value:string) {
    this._color=value;
    this.setColor();
  }
  @Input() message: string = ""; 

  @Input() set valid(value:boolean) {
    if(value){
      this.htmlElement.nativeElement.classList.remove("hidden")
    }else{
      this.htmlElement.nativeElement.classList.add("hidden");
    }
  }

  constructor(private el:ElementRef<HTMLElement>) {
    this.htmlElement=el;
  }
  
  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.addStyle();
  }

  addStyle(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color=this._color;
  }

  setMessage(){
    this.htmlElement.nativeElement.innerText=this._message; 
  }

}
