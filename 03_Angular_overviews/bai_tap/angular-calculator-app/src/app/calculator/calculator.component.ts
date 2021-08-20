import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  constructor() { }

  ngOnInit(): void {
  }
  // phuong thuc
  public calculate(number1: string , number2: string, operator: string): number{
    // tslint:disable-next-line:radix
    const first: number = parseInt(number1);
    // tslint:disable-next-line:radix
    const second: number = parseInt(number2);
    switch (operator) {
      case '+':
        return this.result = first + second;
        break;
      case '-':
        return this.result = first - second;
        break;
      case '*':
        return this.result = first * second;
        break;
      case '/':
        return this.result = first / second;
        break;
    }
  }
}
