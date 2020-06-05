import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  heading = 'Login form';
  signUpStatus = false;
  isLoading = false;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }
  onSubmit(){
    if(!this.authForm.valid){
      return;
    }
    let email = this.authForm.value.email;  
    let password = this.authForm.value.password;
    //making loading spinner visible
    this.isLoading = true;

    if(this.signUpStatus){
      console.log(email+", "+password);
      this.authService.signupUser(email, password).subscribe(resData => {
        this.isLoading = false;
        console.log(resData);
      }, error => {
        this.isLoading = false;
        console.log(error);
      });  
    }
    else {
      this.authService.signinUser(email, password).subscribe(response => {
        this.isLoading = false;
        console.log(response);
        this.router.navigate(['recipes']);
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
    }
    
    console.log(this.authForm);
    //this.authForm.reset();
  }
  onSignUp(){
    this.signUpStatus = !this.signUpStatus;
  }
}
