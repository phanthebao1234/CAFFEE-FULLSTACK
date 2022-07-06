import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { SignupUser } from '../models/signup-user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getUserLogin() {
    return this.get("/users")
  }

  postUserSignup(user:SignupUser) {
    return this.post("/users", user)
  }
}
