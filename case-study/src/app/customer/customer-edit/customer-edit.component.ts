import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
              private toast: ToastrService) {
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

  initForm() {
    this.editForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl('', [Validators.required, Validators.pattern('^(KH)-[0-9]{4}$')]),
      customerType: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]{1,}')]),
      birthday: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}||[0-9]{12}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required])
    });
  }


  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(data => {
      console.log('DDay la id' + id);
      this.editForm.patchValue({
        code: data.code,
        customerType: data.customerType,
        name: data.name,
        birthday: data.birthday,
        idCard: data.idCard,
        phone: data.phone,
        email: data.email,
        address: data.address
      });
      console.log(this.id);
    });


  }


  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    });
  }


  editCustomer() {
    const customer = this.editForm.value;
    this.customerService.update(this.id, customer).subscribe(() => {
      this.router.navigateByUrl('customer-list');
      this.showSuccess();
    });
  }

  showSuccess() {
    this.toast.success('Edit Customer success', 'Thông báo');
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
