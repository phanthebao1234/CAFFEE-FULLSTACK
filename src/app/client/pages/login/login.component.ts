import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenService } from 'src/app/services/authen.service';
import { Router } from '@angular/router';
import { SignupUser } from 'src/app/models/signup-user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  info: SignupUser = new SignupUser();
  frmLogin:FormGroup|any;
  constructor(
    private authenService: AuthenService,
    private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.frmLogin = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    if (this.frmLogin.valid) {
      this.authenService.getUserLogin()
      .then((res:any) => {
        const user = res.find((a:any) => {
          const result = a.email === this.frmLogin.value.email && a.password === this.frmLogin.value.password;
          if(result) {
            this.info = a;
            localStorage.setItem('user-info', JSON.stringify([this.info]));
          }
          return result
        })
        if (user) {
          alert("Login successful")
          this.frmLogin.reset();
          this.router.navigate(['client/product']);
          console.log(this.info)
        }
        else {
          alert("User is not found")
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
    else {
      alert("Login failed")
    }
  }
}
