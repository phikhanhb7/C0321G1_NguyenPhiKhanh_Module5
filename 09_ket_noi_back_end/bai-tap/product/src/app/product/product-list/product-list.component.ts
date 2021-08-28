import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {LoadCssService} from '../../data/load-css.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  idDelete: number;
  message: string;

  constructor(private productService: ProductService, private loadFile: LoadCssService) {
    loadFile.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
    loadFile.loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js');
    loadFile.loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
    loadFile.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js');
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  changeId(id: number) {
    this.idDelete = id;
  }

  mes() {
    alert('xoa thanh công');
  }

  deleteModal() {
    this.productService.deleteProduct(this.idDelete).subscribe(() => {
      this.getProducts();
    });
  }
}
