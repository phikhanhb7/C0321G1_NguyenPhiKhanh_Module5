import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete: number;
  message: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }
  changeId(id: number) {
    this.idDelete = id;
  }

  mes() {
    alert('xoa thanh công');
  }

  deleteModal() {
    this.productService.deleteProduct(this.idDelete);
    this.mes();
  }

}
