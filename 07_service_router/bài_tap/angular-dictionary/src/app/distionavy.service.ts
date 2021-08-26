import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DistionavyService {

  private words: IWord[] = [
    {
      key: 'Hello',
      meaning: 'Chào Bạn'
    }, {
      key: 'What is your name',
      meaning: 'Bạn tên gì ?'
    }, {
      key: 'Thanks you',
      meaning: 'Cám ơnnnn'
    }, {
      key: 'Good luck',
      meaning: 'Chúc bạn may mắn !'
    }, {
      key: 'bye bye',
      meaning: 'Tạm Biệt !'
    }
  ];

  constructor() { }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word);

    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  getAll(): IWord[] {
    return this.words;
  }
}
