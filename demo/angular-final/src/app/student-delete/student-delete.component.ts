import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../service/student.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private service: StudentService,
              private  toast: ToastrService) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.service.delete(this.data.id).subscribe(next => {
      this.dialogRef.close(true);
      this.showMessage();
    });
  }

  showMessage(){
    this.toast.success('Xoa thành công', 'Thông báo');
  }

}
