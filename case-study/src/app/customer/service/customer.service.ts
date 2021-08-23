import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer, CustomerResponse} from '../model/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public API_CUSTOMER = 'http://localhost:3000/customer';
  public API_CUSTOMER_TYPE = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  // public getAllCustomer(): Observable<Customer[]> {
  //   this.http.get<Customer[]>(this.API_CUSTOMER);
  // }

  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER).pipe();
  }
}
