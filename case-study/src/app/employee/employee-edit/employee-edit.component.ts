import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Division} from '../model/division';
import {Positions} from '../model/position';
import {EducationDegree} from '../model/educationDegree';
import {EmployeeService} from '../service/employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  divisions: Division[] = [];
  positions: Positions[];
  educations: EducationDegree[] = [];

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private route: Router,
              private toast: ToastrService) {
    // this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
    //   this.id = + paraMap.get('id');
    // })
    this.id = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit(): void {
    this.getData();
    this.initForm();
    this.getEmployee();
  }

  getData() {
    this.employeeService.getAllDivision().subscribe(data => {
      this.divisions = data;
    });
    this.employeeService.getAllPosition().subscribe(data => {
      console.log(data);
      this.positions = data;
    });
    this.employeeService.getAllEducation().subscribe(data => {
      this.educations = data;
    });
  }

  initForm() {
    this.editForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl('', [Validators.required, Validators.pattern('^(NV)-[0-9]{4}')]),
      name: new FormControl('', [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      birthday: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
      salary: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      educationDegree: new FormControl('', Validators.required),
    });
  }
// C1
  // getEmployee(id: number){
  //   this.employeeService.findById(id).subscribe(data =>{
  //     this.editForm.patchValue({
  //       code : data.code,
  //       name: data.name,
  //       birthday: data.birthday,
  //       idCard: data.idCard,
  //       salary: data.salary,
  //       phone: data.phone,
  //       email: data.email,
  //       address: data.address,
  //       position: data.position,
  //       division: data.division,
  //       educationDegree: data.educationDegree
  //     })
  //   })
  // }
// C2
  getEmployee(){
    this.employeeService.findById(this.id).subscribe(data=>{
      this.editForm.setValue(data);
    })
  }
  edit() {
    const employee = this.editForm.value;
    this.employeeService.update(this.id,employee).subscribe(()=>{
      this.route.navigateByUrl('employee-list');
      this.showSuccess()
    })
  }

  showSuccess() {
    this.toast.success('Edit Employee success', 'Thông báo');
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
