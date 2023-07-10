import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  result: string = '';

  appendValue(value: string): void {
    this.result += value;
  }

  calculate(): void {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }

  clear(): void {
    this.result = '';
  }
}
