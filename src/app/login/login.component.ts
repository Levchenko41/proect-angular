import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
public invalidLogin =false;
public invalidPassword =false;
public authGroup: FormGroup;

public users: any[] = [
  {
    id:1,
    name:"Dima",
    age: 23,
    country: "Minsk",
    profeccion:["Programmist","Soft"]
  },
  {
    id:2,
    name:"Dima2",
    age: 23,
    country: "Minsk",
    profeccion:["Programmist","Soft"]
  },
  {
    id:3,
    name:"Dima3",
    age: 23,
    country: "Minsk",
    profeccion:["Programmist","Soft"]
  },
]
  constructor(
    private formBuilder:FormBuilder,
  )
  {
    this.authGroup=this.formBuilder.group({
      login:[ null, Validators.required],
      password:[ null, [Validators.required,Validators.maxLength(7)]]
    });
  }

  public sent():void{
    this.authGroup.controls.login.invalid && this.authGroup.controls.login.hasError('required') 
      ? this.invalidLogin = true 
      : this.invalidLogin=false;
      console.log(this.authGroup.value);
      
  }
}
