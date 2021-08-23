import {Component, OnInit} from '@angular/core';
import {LoadCssService} from '../../bootstrap-loadCSS/load-css.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  // constructor(private load: LoadCssService) {
  //   load.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css');
  // }
  constructor() {
  }

  ngOnInit(): void {
  }
}
