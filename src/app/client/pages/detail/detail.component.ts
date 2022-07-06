import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  listProduct: any
  listdata: any
  id: number = 0;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
          this.id = +params['id'];
      }
    );
    this.getProductDetail();
    console.log(this.id);
    setTimeout(() => {
      console.log(typeof this.listProduct);
      console.log(this.listdata);

    }, 2000)


  }

  getProductDetail() {
    this.productService.getAllProductDetail(this.id)
      .then((res:any) => {
        this.listProduct = res;
        this.listdata = res;
      })
      .catch((error:any) => {
        console.log(error);
      })
  }

  addtoCart(product:any) {
    console.log("Emit: ", product);
  }

}
