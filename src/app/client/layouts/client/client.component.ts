import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupUser } from 'src/app/models/signup-user.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  info: SignupUser[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showInfo();
    console.log(this.info);
  }

  showInfo() {
    try {
      const user = localStorage.getItem('user-info')
      console.log(user);

      if (user) {
        const userLocal = JSON.parse(user);
        console.log(userLocal);

        return this.info = userLocal;
      }
    else {
      return [];
    }
    } catch (error) {
      console.log(error);

    }
  }

  logout() {
    localStorage.removeItem('user-info');
    window.location.reload();
    this.router.navigate(['/client/login'])
  }
}
