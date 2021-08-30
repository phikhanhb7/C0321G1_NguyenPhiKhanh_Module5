import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product!: Product;
  // message: string;
  editForm: FormGroup;
  categories!: Category[];
  idEdit: number;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private  categoryService :CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params.id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idEdit = parseInt(paramMap.get('id'));
      this.productService.findById(this.idEdit).subscribe(product => {
        this.editForm = this.formBuilder.group({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
          category: new FormControl(product.category)
        });
      });
    });
    this.getCategories();
  }

  submit(editForm: FormGroup) {
    const product = this.editForm.value;
    this.productService.updateProduct(product).subscribe(() => {
      this.editForm.reset();
      alert('cập nhật thành công');
      this.backtolist();
    }, e => {
      alert('Thất bại');
    });
  }

  getCategories() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  backtolist() {
    this.router.navigateByUrl('product/list');
  }
}
