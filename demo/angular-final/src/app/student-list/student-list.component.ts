import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentService} from '../service/student.service';
import {MatDialog} from '@angular/material/dialog';
import {StudentDeleteComponent} from '../student-delete/student-delete.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];
  p = 1;

  constructor(private service: StudentService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getAllStudent().subscribe(data => {
      this.studentList = data;
    });
  }

  onDeleteHandler(id: number, nameParam: string): void {
    const dialogRef = this.dialog.open(StudentDeleteComponent, {
      width: '500px',
      data: {
        id,
        name : nameParam
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.ngOnInit();
      }
    });
  }

}
