import { Input, Component } from '@angular/core';

@Component({
  selector: 'div[user-profile]',
  template: `
    <h3 [class.hired]="isHired">{{ firstName }} {{ lastName }}</h3>
    <img [src]="avatar" alt="" />
    Métier : <strong>{{ job }}</strong>
    <button (click)="onClickButton($event.clientX)">Pris(e)</button>
  `,
  styles: [
    `
      .hired {
        background-color: green;
      }

      h3 {
        color: red;
      }
    `,
  ],
})
export class UserProfileComponent {
  @Input('first-name')
  firstName = '';
  @Input('last-name')
  lastName = '';
  @Input()
  job = '';
  @Input('hired')
  isHired = false;

  onClickButton(coordX: number) {
    console.log(coordX);
    this.isHired = true;
  }

  avatar = 'https://via.placeholder.com/30';
}
