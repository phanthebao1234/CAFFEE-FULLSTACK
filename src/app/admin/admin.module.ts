import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { OrderComponent } from './pages/order/order.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductComponent,
    OrderComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgApexchartsModule,
    FormsModule,
    NgxPaginationModule,
    CKEditorModule
  ]
})
export class AdminModule { }
