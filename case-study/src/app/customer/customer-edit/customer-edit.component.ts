import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerType} from '../model/customerType';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast : ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getCustomer(this.id);
    this.getAllCustomerType();


  }

  initForm(){
    this.editForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl(),
      customerType: new FormControl(),
      name: new FormControl(),
      birthday: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl()})
    ;
  }



  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(data=>{
      console.log('DDay la id' + id)
      this.editForm.patchValue({
        code : data.code,
        customerType : data.customerType,
        name: data.name,
        birthday: data.birthday,
        idCard: data.idCard,
        phone: data.phone,
        email: data.email,
        address : data.address
      })
      console.log(this.id)
    })



  }



  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
    this.customerTypes = data;
    });
  }


  editCustomer(){
    const customer = this.editForm.value;
    this.customerService.update(this.id,customer).subscribe(()=>{
      this.router.navigateByUrl('customer-list');
      this.showSuccess();
    })
  }

  showSuccess(){
    this.toast.success('Edit Customer success','Thông báo');
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
