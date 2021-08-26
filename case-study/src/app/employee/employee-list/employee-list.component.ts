import {Component, OnInit} from '@angular/core';
import {Division} from '../model/division';
import {EducationDegree} from '../model/educationDegree';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../../customer/customer-delete/customer-delete.component';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';
import {Customer} from '../../customer/model/customer';
import {CustomerDetailComponent} from '../../customer/customer-detail/customer-detail.component';
import {EmployeeDetailComponent} from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // divisions: Division[] = [];
  // positions: Position[] = [];
  // educations: EducationDegree[] =[];
  employees: Employee[] = [];
  p = 1;
  term: any;

  constructor(private employeeService: EmployeeService,
              private  dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
    // this.employeeService.getAllDivision().subscribe(data=>{
    //   this.divisions= data;
    // });
    // this.employeeService.getAllPosition().subscribe(data=>{
    //   this.positions = data;
    // });
    // this.employeeService.getAllEducation().subscribe(data =>{
    //   this.educations = data;
    // })
  }

  onDeleteHandler(id: number, nameParam: string): void {
    const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
      height: '140px',
      width: '300px',
      data: {
        id: id,
        nameCus: nameParam
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.ngOnInit();
      }
    });
  }

  onDetailHandler(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeDetailComponent, {
      width: '500px',
      height: '700px',
      data: employee
    });
  }
}
