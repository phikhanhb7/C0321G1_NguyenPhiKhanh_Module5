import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DistionavyService} from '../distionavy.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-distionavy-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;
  sub: Subscription;
  constructor(private activatedRoute: ActivatedRoute,
              private dictionavyService: DistionavyService) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionavyService.search(key);
      this.word = {
        key,
        meaning
      };
    });
  }
  ngOnInit(): void {
  }
}
