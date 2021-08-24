import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {LoadCssService} from '../../bootstrap-loadCSS/load-css.service';
import Swal from 'sweetalert2';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerType} from '../model/customerType';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  public customerTypes: CustomerType[];


  public createCustomer: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    customerType: new FormControl(),
    name: new FormControl(),
    birthday: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),

  });


  // constructor(private load: LoadCssService) {
  //   load.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css');
  // }
  constructor(private customerService: CustomerService, private router: Router, private toat : ToastrService) {
  }

  ngOnInit(): void {
   this.getData();

  }

  getData(){
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    });
  }

  create() {
    const customer = this.createCustomer.value;
    this.customerService.saveCustomer(customer).subscribe(date => {
      this.router.navigateByUrl('customer-list');
      this.showMessage();
    }, error => {
     this.showError();
    });
  }

  showMessage(){
    this.toat.success('Thêm mới thành công', 'Thông báo');
  }
  showError(){
    this.toat.error('Thêm mới thất bại', 'Cảnh  báo');
  }
}
