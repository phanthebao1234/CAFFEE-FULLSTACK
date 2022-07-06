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
  order: Checkout = new Checkout();
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
    try {
      const oldCart = localStorage.getItem('cart');
      if (oldCart && oldCart != '') {
        product.quantity = 1
        const cart = [...JSON.parse(oldCart), product];
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        const cart: any = [];
        product.quantity = 1
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      alert("Bạn đã thêm sản phẩm thành công")
    } catch (error) {
      console.log(error);
    }
  }

}
