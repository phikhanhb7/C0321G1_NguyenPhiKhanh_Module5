import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Class} from '../model/class';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  classList: Class[] = [];
  createForm: FormGroup;

  constructor(private service: StudentService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getData();
    this.getInit();
  }

  getData() {
    this.service.getAllClass().subscribe(data => {
      this.classList = data;
    });
  }

  getInit() {
    this.createForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      age: new FormControl('', [Validators.required, Validators.min(1)]),
      address: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required)
    });
  }

  create() {
    const studen = this.createForm.value;
    this.service.save(studen).subscribe(() => {
      this.router.navigateByUrl('');
      this.showSuccess();
    }, error1 => {
      this.showError();
    });
  }

  showSuccess() {
    this.toast.success('Tạo mới thành công', 'Chúc mừng Tèo');
  }

  showError() {
    this.toast.error('Thất Bại', 'Chia Buồn');
  }

}
