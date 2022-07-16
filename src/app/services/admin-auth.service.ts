import { Injectable } from '@angular/core';
import { AdminAuth } from '../models/admin-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  _userLogin:string = '';
  constructor() { }

  login(user: AdminAuth) {
    return new Promise((resolve, reject) => {
      try {
        if (user.userAdmin =="admin" && user.passwordAdmin == "admin") {
          localStorage.setItem("adminLogin", JSON.stringify(user));
          resolve(user);
        }
        else {
          reject();
        }
      } catch (error) {
        reject(error);
      }
    })
  }

  checkLogin() {
    let strUser = localStorage.getItem("adminLogin");
    if (strUser && strUser.length > 0) {
      this._userLogin = JSON.parse(strUser);
      return true;
    }
    return false;
  }


}
