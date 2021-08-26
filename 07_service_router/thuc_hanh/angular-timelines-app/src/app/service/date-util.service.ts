import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }


  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    // @ts-ignore
    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      // @ts-ignore
      diff = addYears(diff, years);
    }

    // @ts-ignore
    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      // @ts-ignore
      diff = addMonths(diff, months);
    }

    // @ts-ignore
    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }
}
