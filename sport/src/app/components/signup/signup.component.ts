import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/MustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  t : string = "Sign Up";
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService : UserService) { }

  ngOnInit() {
    this.signupForm = this.fb.group ({
      firstname: ['', [Validators.minLength(3), Validators.required]],
      lastname: ['', [Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(5), Validators.required]],
      confirmPwd: ['']
    },
    {
      validators : MustMatch("pwd", "confirmPwd")
    })
  }

  signup() {
    this.userService.signup(this.signupForm.value).subscribe();   
  }
}