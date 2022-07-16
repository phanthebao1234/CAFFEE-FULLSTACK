import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupUser } from 'src/app/models/signup-user.model';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: SignupUser[] = [];
  users: SignupUser = new SignupUser;
  constructor(private authenService: AuthenService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const userStorage = localStorage.getItem('user-info');
    if (userStorage) {
      this.user = JSON.parse(userStorage);
      this.users = this.user[0];
      console.log(this.users);
    }
  }

  editProfile(frmedit: NgForm) {
    if (frmedit.valid) {
      this.authenService.editUser(frmedit.value, this.users.id)
        .then((res) => {
          localStorage.setItem('user-info', JSON.stringify([this.users]));
          this.loadUser();
          alert("Cập nhật tài khoản thành công!")
        })
    }
    else{
      alert("Cập nhật thất bại")
    }
  }
}
