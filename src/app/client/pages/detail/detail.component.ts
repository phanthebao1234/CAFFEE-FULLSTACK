import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Checkout } from 'src/app/models/checkout.model';
import { Product } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  listProduct: any;
  listdata: any;
  id: number = 0;
  order:Checkout = new Checkout;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getProductDetail();
  }

  getProductDetail() {
    this.productService
      .getAllProductDetail(this.id)
      .then((res: any) => {
        this.listProduct = res;
        this.listdata = res;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  addtoCart(product: any) {
    console.log('Emit: ', product);
    const oldOrder = this.checkExits(product);
    if (oldOrder) {
      oldOrder.quantity += 1;
    } else {
      product.quantity = 1;
      this.order.carts.push(product);
      console.log(this.order.carts);
    }

  }

  // createOrder() {
  //   const user = localStorage.getItem('user-info');
  //   if(user && user != "") {
  //     console.log(user);

  //     this.
  //   }
  // }

  checkExits(product: Product) {
    for (let i = 0; i < this.order.carts.length; i++) {
      const element = this.order.carts[i];
      if (product.id == element.id) {
        return product;
      }
    }
    return false;
  }

  calcCart(){
    let total = 0;
    for (let i = 0; i < this.order.carts.length; i++) {
      const element = this.order.carts[i];
      total = total + (element.quantity* element.price);
    }

    this.order.totalAmout = total;
  }


}
