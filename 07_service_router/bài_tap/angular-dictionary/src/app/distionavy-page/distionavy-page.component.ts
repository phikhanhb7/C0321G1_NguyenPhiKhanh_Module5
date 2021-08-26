import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {DistionavyService} from '../distionavy.service';

@Component({
  selector: 'app-distionavy-page',
  templateUrl: './distionavy-page.component.html',
  styleUrls: ['./distionavy-page.component.css']
})
export class DistionavyPageComponent implements OnInit {
  listWord: IWord[] = [];
  constructor(private dictionavyService: DistionavyService) { }

  ngOnInit(): void {
    this.listWord = this.dictionavyService.getAll();
  }

}
