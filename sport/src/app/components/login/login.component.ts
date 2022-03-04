import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  t : string = "Log In"
  loginForm : FormGroup;
  user:any={};
  constructor(
    private formBuilder: FormBuilder,
    private userService : UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group ({
      email : [''],
      pwd:['']
    });
  }  

  login(){
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
