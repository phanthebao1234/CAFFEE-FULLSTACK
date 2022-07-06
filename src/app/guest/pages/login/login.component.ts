import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuth } from 'src/app/models/admin-auth.model';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin:AdminAuth = new AdminAuth();
  constructor(private adminAuthService: AdminAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(frm:NgForm) {
    if (frm.valid) {
      this.adminAuthService.login(this.admin)
      .then((res:any) => {
        alert("Đăng nhập thành công");
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert("Đăng nhập thất bại")}
      )
      .finally(() => {})
    }
  }
}
