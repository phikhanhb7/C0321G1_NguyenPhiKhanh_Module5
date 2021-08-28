import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  products: Product[] = [];

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product) {
    return this.httpClient.post<Product>(this.API_URL, product);
  }


  // @ts-ignore
  findById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.API_URL + '/' + id);
  }

  editProduct(id: number, product: Product) {
    return this.httpClient.patch<Product>(this.API_URL + '/' + id, product);
    /*this.products.find(proEdit => proEdit.id === product.id).id = product.id;
    this.products.find(proEdit => proEdit.id === product.id).name = product.name;
    this.products.find(proEdit => proEdit.id === product.id).price = product.price;
    this.products.find(proEdit => proEdit.id === product.id).description = product.description;*/
  }
  /*productDelete: Observable<Product>;*/
  deleteProduct(id: number) {
    /*this.productDelete = this.findById(id)*/
    // @ts-ignore
    return this.httpClient.delete<Product>(this.API_URL+ '/' + id);
  }
}
