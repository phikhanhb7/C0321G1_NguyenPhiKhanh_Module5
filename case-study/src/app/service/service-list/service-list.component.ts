import { Component, OnInit } from '@angular/core';
import {Service} from '../model/service';
import {ServicesService} from '../service/services.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeDeleteComponent} from '../../employee/employee-delete/employee-delete.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services : Service[] = [];
  p =1 ;


  constructor(private service : ServicesService,
              private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getAllService().subscribe(data =>{
      this.services = data
    })
  }


}
