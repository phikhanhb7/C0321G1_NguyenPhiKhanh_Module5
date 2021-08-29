import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {CustomerType} from '../model/customerType';
import {CustomerDetailComponent} from '../customer-detail/customer-detail.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];

  // public customers;
  p:number = 1;

  searchCustomerName  = '';
  searchCustomerTypeName = '';

  constructor(private customerService: CustomerService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.getAll();
    // this.customerService.getAllCustomer().subscribe(data => {
    //   this.customers = data;
    // });
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(customers => {
      this.customers = customers;
      this.customerService.getAllCustomerType().subscribe(customerType => {
        this.customerTypes = customerType;
      });
    });
  }


  onDeleteHandler(id : number, nameParam: string): void {
    const dialogRef = this.dialog.open(CustomerDeleteComponent, {
      height: '140px',
      width: '300px',
      data: {
        id : id,
        nameCus: nameParam
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
          this.getAll();
      }
    });
  }

  onDetailHandler(customer: Customer) {
    const dialogRef = this.dialog.open(CustomerDetailComponent, {
      width: '500px',
      height: '700px',
      data: customer
    });
  }

  search() {
    this.customerService.search(this.searchCustomerName,this.searchCustomerTypeName).subscribe(data => {
      this.customers = data;
      this.p = 1;
    });
  }

  sortIdCard() {
    this.customerService.sort().subscribe(data=>{
      this.customers = data;
      this.p = 1;
    })
  }

  sortName() {
    this.customerService.sort1().subscribe(data=>{
      this.customers = data;
      this.p = 1;
    })
  }

  sortCode() {
    this.customerService.sort2().subscribe(data=>{
      this.customers = data;
      this.p = 1;
    })
  }
}
