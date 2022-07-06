import { Injectable } from '@angular/core';
import { Checkout } from '../models/checkout.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  KEY = "ORDER"
  constructor() { }

  createOrder(order: Checkout){
    order.id = Date.now() / 1000 | 0;
    const listOrder = this.loadOrder();
    listOrder.push(order);
    localStorage.setItem(this.KEY, JSON.stringify(listOrder));
  }

  loadOrder() {
    try {
      const strOrder = localStorage.getItem(this.KEY);
      if (strOrder && strOrder != "") {
        return JSON.parse(strOrder);
      }
      else {
        return []
      }
    }
    catch (err) {
      return [];
    }
  }
}
