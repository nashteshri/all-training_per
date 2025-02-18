import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl([Validators.required, Validators.min(18)]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      alert(`Form Submitted! ${this.myForm.value}`);
    } else {
      alert('Form is invalid');
    }
  }

}
