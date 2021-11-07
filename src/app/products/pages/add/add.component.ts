import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  color: string ="red";

  myForm:FormGroup=this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb:FormBuilder) { }

  itHasErrors(field:string):boolean {
    return this.myForm.get(field)?.invalid || false; 
  }

  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color=color; 
  }

}
