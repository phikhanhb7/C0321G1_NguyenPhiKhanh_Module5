import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../service/employee.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(public dialog : MatDialogRef<EmployeeDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any ,
              private employeeService: EmployeeService,
              private toast : ToastrService) { }

  ngOnInit(): void {
  }

  delete(){
    this.employeeService.deleteCustomer(this.data.id).subscribe(()=>{
      this.dialog.close(true);
      this.showMessage();

    })
  }

  showMessage(){
    this.toast.success('Xoa thành công', 'Thông báo');
  }

}
