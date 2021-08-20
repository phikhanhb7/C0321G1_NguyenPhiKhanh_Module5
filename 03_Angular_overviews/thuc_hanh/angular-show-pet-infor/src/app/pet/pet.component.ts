import {Component, Input, OnInit} from '@angular/core';
import {Pet} from './model/Pet';


// @ts-ignore
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})

export class PetComponent implements OnInit {
  @Input() abc = '';
  @Input() xyz = '';
  pet: Pet = {
    name: 'cuppi',
    image: 'https://upanh123.com/wp-content/uploads/2021/03/hinh-anh-dep-ve-dong-vat.jpg'
  };

  constructor() { }

  ngOnInit(): void {
    this.pet.name = this.abc;
  }

}
