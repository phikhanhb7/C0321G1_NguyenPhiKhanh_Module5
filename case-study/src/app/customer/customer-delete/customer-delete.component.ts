import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../service/customer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private  toast : ToastrService) { }

  ngOnInit(): void {
  }


  delete() {
    this.customerService.deleteCustomer(this.data.id).subscribe(next => {
      this.dialogRef.close(true);
      this.showMessage()
    });
  }

  showMessage(){
    this.toast.success('Xoa thành công', 'Thông báo');
  }
}
