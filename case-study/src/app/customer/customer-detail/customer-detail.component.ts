import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService,
              public dialogRef: MatDialogRef<CustomerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toast : ToastrService) { }

  ngOnInit(): void {
  }

}
