import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  // public customers;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
    // this.customerService.getAllCustomer().subscribe(data => {
    //   this.customers = data;
    // });
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }
}
