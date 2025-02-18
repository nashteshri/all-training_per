import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/userModel';

@Component({
  selector: 'app-registration',
  standalone: false,
  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
    //private id:number;
  constructor(private service:LoginService){}
  private id:number=1;

  singUpForm=new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('User', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit(){
    alert("Form submitted sucessfully");
    this.service.addUser((this.singUpForm.value) as User);
    this.singUpForm.reset();
    //console.log(this.singUpForm.value);
  }
}
