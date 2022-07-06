import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupUser } from 'src/app/models/signup-user.model';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user:SignupUser = new SignupUser;
  constructor(private router:Router, private authenService: AuthenService ) { }

  ngOnInit(): void {
    const id = this.printRandomString(10);
    // setInterval(() => { console.log(id)}, 1000)
  }

  signup(frm:NgForm) {
    if (frm.valid) {
      this.authenService.postUserSignup(frm.value)
        .then(() => {
          alert("Đăng kí thành công")
          console.log(frm.value);
          frm.reset();
          this.router.navigate(['client/login'])
        })
        .catch(err => {console.log(err)})

    }
    else {
      alert("Đăng kí không thành công")
    }
  }

  //Hàm random id
  printRandomString(n: number) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let res = "";
    for (let i = 0; i < n; i++) {
        res = res + alphabet[Math.floor(Math.random() * 10) % 36];
    }
    return res;
  }
}
