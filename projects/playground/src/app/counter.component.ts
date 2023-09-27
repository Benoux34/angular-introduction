import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="container">
      <button (click)="onClickPlus()">+</button>
      <h1>{{ initialValue }}</h1>
      <button (click)="onClickMoins()">-</button>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
      }
    `,
  ],
})
export class CounterComponent {
  @Input('initial-value')
  initialValue = 0;

  @Input('step')
  step = 1;

  onClickPlus() {
    this.initialValue += this.step;
  }

  onClickMoins() {
    this.initialValue -= this.step;
  }
}
