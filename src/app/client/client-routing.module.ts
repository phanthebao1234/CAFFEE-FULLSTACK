import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component'
import { SignupComponent } from './pages/signup/signup.component';
import { BlogsdetailComponent } from './pages/blogsdetail/blogsdetail.component'
import { UserComponent } from './pages/user/user.component';
const routes: Routes = [
  {
    path: "client",
    component: ClientComponent,
    children: [
      {
        path: "",
        redirectTo:"home",
        pathMatch: "full",
      },
      {
        path: "product",
        component: ProductComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "user",
        component: UserComponent,
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "detail/:id",
        component: DetailComponent
      },
      {
        path: "cart",
        component: CartComponent,
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "blogs",
        component: BlogsComponent
      },
      {
        path: "blogs/:id",
        component: BlogsdetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
