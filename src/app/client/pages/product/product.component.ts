import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [];
  constructor(private productService: ProductService, private router: Router ) { }

  ngOnInit(): void {
    this.loadData();

    this.filterCategory("tatca");
    console.log(typeof this.listProduct);
  }

  //Lấy dữ liệu về
  loadData() {
    this.productService.getAllProduct()
      .then((res:any) => {
        this.listProduct = res;
      })
      .catch((error:any) => {
        console.log(error);
      })
  }

  filteredItems: Product[] = [...this.listProduct];
  filterCategory(category: string) {
    if (category) {
      this.filteredItems = this.listProduct.filter((item: Product)=> {
        return item.category.includes(category) && category;
      })
    }
    else if ('tatca') {
      return this.filteredItems = [...this.listProduct];
    }
  }

  reset() {
    this.filteredItems = [...this.listProduct];
  }

  detail(id: number) {
    console.log("ID ",id);
    this.router.navigate(['/client/detail/', id])
  }

}
