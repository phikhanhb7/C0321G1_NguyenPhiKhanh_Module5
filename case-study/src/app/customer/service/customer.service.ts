import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer, CustomerResponse} from '../model/customer';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public API_CUSTOMER = 'http://localhost:3000/customer';
  public API_CUSTOMER_TYPE = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) {
  }


  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER);
  }


  public saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_CUSTOMER, customer);
  }


  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_CUSTOMER_TYPE);
  }

  public deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.API_CUSTOMER}/${id}`);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.API_CUSTOMER}/${id}`, customer);
  }

  findById(id: number) {
    return this.http.get<Customer>(`${this.API_CUSTOMER}/${id}`);
  }

  search(searchCustomerName: string, searchCustomerTypeName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER + '?name_like=' + searchCustomerName + '&customerType.name_like=' + searchCustomerTypeName );
  }
  // search1(searchCustomerName: string): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.API_CUSTOMER + '?name_like=' + searchCustomerName  );
  // }
  // search2( searchCustomerTypeName: string): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.API_CUSTOMER + '?customerType.name_like=' + searchCustomerTypeName );
  // }
}
