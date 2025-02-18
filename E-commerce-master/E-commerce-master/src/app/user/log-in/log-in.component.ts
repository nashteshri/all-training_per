import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/userModel';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-log-in',
  standalone: false,
  
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent{

  constructor(private service:LoginService){}
  
  isLoggedIn:boolean;
  currUser:User;


  ngOnInit(){
    this.isLoggedIn=this.service.isLoggedIn();
    this.currUser=this.service.getCurrUser();
  }

  logInForm=new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  // @Output() logInEvent=new EventEmitter<boolean>();

  
  onSubmit(){
    if(this.service.isValid(this.logInForm.value.email as string,this.logInForm.value.password as string)){
      alert("Login sucessful");
      this.isLoggedIn=true;
      this.currUser=this.service.getCurrUser();
      // this.logInEvent.emit(true);
      this.logInForm.reset();
      //console.log(this.singUpForm.value);
    }else{
      alert("Invalid credential");
    }
  }

  logOut(){
    this.service.logOut();
    // this.logInEvent.emit(false);
    this.isLoggedIn=false;
  }
}
