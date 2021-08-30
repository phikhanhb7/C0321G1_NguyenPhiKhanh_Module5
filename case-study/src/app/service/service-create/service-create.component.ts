import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../service/services.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {RentType} from '../model/rentType';
import {ServiceType} from '../model/serviceType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {compareSegments} from '@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  rentTypes: RentType[]= [];
  serviceTypes: ServiceType[] = [];
  createForm: FormGroup;

  constructor(private service : ServicesService,
              private routes : Router,
              private toast : ToastrService) { }

  ngOnInit(): void {
    this.getData();
    this.getInit();
  }

  getData(){
    this.service.getAllRentType().subscribe(data =>{
      this.rentTypes = data;
      console.log(data)
    })
    this.service.getAllServiceType().subscribe(data =>{
      this.serviceTypes = data;
      console.log(data)
    })
  }

  getInit(){
    this.createForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(0)]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(0)]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      serviceType: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }

  create(){
    const service = this.createForm.value;
    this.service.save(service).subscribe(()=>{
      this.routes.navigateByUrl('service-list');
      this.showSuccess();
    })
  }

  showSuccess(){
    this.toast.success('Tạo mới thành công','Thông Báo')
  }

}
