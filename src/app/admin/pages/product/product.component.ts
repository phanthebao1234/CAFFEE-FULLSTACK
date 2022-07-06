import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getAllProduct()
      .then((res:any) => {
        this.listProduct = res;
      })
      .catch((err:any) => {
        console.log(err);
      })
  }

  edit(id:number) {
    console.log("id: " + id);
  }
  delete(id:number) {
    console.log("id: " + id);
  }
}
