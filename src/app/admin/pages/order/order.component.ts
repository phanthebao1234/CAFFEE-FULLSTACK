import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/models/checkout.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  listOrder: Checkout[] = [];
  p: number = 1;
  count: number = 5;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrder();
    console.log(this.listOrder)
  }

  loadOrder() {
    this.listOrder = this.orderService.loadOrder();
  }
}
