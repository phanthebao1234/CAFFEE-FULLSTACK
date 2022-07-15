import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [];
  newProduct: Product = new Product;
  editproduct: Product = new Product;
  p: number = 1;
  count: number = 5;
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

  edit(item:Product) {
    this.editproduct = item;
  }
  delete(id:number, name:string) {
    if(window.confirm("Bạn chắc chắn muốn xóa chứ ? Sản Phẩm ID: " + name)) {
      this.productService.deleteProduct(id)
      .then(response => {
        this.listProduct.splice(this.listProduct.findIndex(e => e.id === id), 1);
        alert("Bạn có muốn xóa sản phẩm này chứ ? " + id);
        this.loadProduct();
      })
    }
  }
  addProduct(frmAddProduct: NgForm){
    if (frmAddProduct.valid) {
      this.productService.addProduct(frmAddProduct.value);
      this.listProduct.push(frmAddProduct.value);
      frmAddProduct.reset();
      alert("Thêm sản phẩm thành công");
      this.loadProduct();
    }
    else {
      console.log("Thêm sản phẩm không thành công");
    }
  }
  editProduct(frmEditProduct: NgForm) {
     try {
      if (frmEditProduct.valid) {
        this.productService.editProduct(this.editproduct, this.editproduct.id)
          .then((res) => {
            frmEditProduct.reset()
            this.loadProduct();
            alert("Cập nhật sản phẩm thành công");
          })
          .catch((err) => {
            console.log("Cập nhật sản phảm thất bại");
          })
       }

     } catch (error) {
      console.log(error);

     }
  }
}
