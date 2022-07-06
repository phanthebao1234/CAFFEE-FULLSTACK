import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAllProduct() {
    return this.get("/products")
  }

  getAllProductDetail(id: number) {
    return this.get("/products/" + id)
  }
}
