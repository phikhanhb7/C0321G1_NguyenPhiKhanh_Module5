import { Component, OnInit } from '@angular/core';
import {Division} from '../model/division';
import {EducationDegree} from '../model/educationDegree';
import {EmployeeService} from '../service/employee.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Positions} from '../model/position';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  divisions: Division[] = [];
  positions: Positions[] ;
  educations: EducationDegree[] =[];
  createForm: FormGroup;

  constructor(private employeeService: EmployeeService,
              private router : Router,
              private toast : ToastrService) { }

  ngOnInit(): void {
    this.getData();
      this.getInit()
  }

  getData(){
    this.employeeService.getAllDivision().subscribe(data=>{
      this.divisions= data;
    });
    this.employeeService.getAllPosition().subscribe(data=>{
      console.log(data)
      this.positions = data;
    });
    this.employeeService.getAllEducation().subscribe(data =>{
      this.educations = data;
    })
  }

  getInit(){
    this.createForm = new FormGroup({
      id: new FormControl(),
      code : new FormControl('',[Validators.required,Validators.pattern('^(NV)-[0-9]{4}')]),
      name : new FormControl('',[Validators.required,Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      birthday : new FormControl('',Validators.required),
      idCard : new FormControl('',[Validators.required,Validators.pattern('[0-9]{9}')]),
      salary : new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      phone : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      email : new FormControl('',[Validators.required,Validators.email]),
      address : new FormControl('',Validators.required),
      position : new FormControl('',Validators.required),
      division : new FormControl('',Validators.required),
      educationDegree : new FormControl('',Validators.required),
    })
  }

  create() {
    const employee = this.createForm.value;
    this.employeeService.save(employee).subscribe(()=>{
      this.router.navigateByUrl('employee-list');
      this.showSuccess()
    }, error1 => {
      this.showError()
    })
  }

  showSuccess(){
    this.toast.success('Tạo mới thành công','Chúc mừng Tèo')
  }

  showError(){
    this.toast.error('Thất Bại', 'Chia Buồn')
  }
}
