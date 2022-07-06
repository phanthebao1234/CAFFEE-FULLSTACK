import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/models/checkout.model';
import { Product } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  summary:Checkout = new Checkout;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrder();
    this.calcCart()
  }

  loadOrder() {
    const data = localStorage.getItem('cart');
    if (data && data != "") {
      this.summary.carts = JSON.parse(data)
    }
  }

  thanhtoan() {
    const user = localStorage.getItem('user-info');
    if (user && user != "") {
      this.summary.customer = JSON.parse(user);
      this.orderService.createOrder(this.summary);

      localStorage.removeItem('cart')
      this.summary = new Checkout;
      alert("Thanh toán thành công")
    }else {
      alert('Xin vui lòng đăng nhập trước khi thanh toán')
    }
  }

  calcCart() {
    this.summary.totalAmount = this.summary.carts.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0)
  }

  removeCart(i: number) {
    console.log(i);
    this.summary.carts.splice(i, 1);
    this.calcCart();
    localStorage.setItem('cart', JSON.stringify(this.summary.carts))
  }
}
