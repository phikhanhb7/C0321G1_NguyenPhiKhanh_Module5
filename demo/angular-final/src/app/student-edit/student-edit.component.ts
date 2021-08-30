import {Component, OnInit} from '@angular/core';
import {Class} from '../model/class';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  classList: Class[] = [];
  editForm: FormGroup;
  id: number;

  constructor(private service: StudentService,
              private activatedRoute: ActivatedRoute,
              private route: Router,
              private toast: ToastrService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getData();
    this.getInit();
    this.getStudent();
  }

  getData() {
    this.service.getAllClass().subscribe(data => {
      this.classList = data;
    });
  }

  getInit() {
    this.editForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      age: new FormControl('', [Validators.required, Validators.min(1)]),
      address: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required)
    });
  }

  getStudent() {
    this.service.findById(this.id).subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  edit() {
    const student = this.editForm.value;
    this.service.update(this.id, student).subscribe(() => {
      this.route.navigateByUrl('');
      this.showSuccess();
    });
  }

  showSuccess() {
    this.toast.success('Edit Employee success', 'Thông báo');
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
