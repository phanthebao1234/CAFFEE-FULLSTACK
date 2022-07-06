import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './layouts/guest/guest.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GuestComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
  ]
})
export class GuestModule { }
