import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirm-message')
  baseMessage: string | undefined;

  @HostListener('click', ['$event'])
  onClickLink(e: any) {
    if (!window.confirm(this.baseMessage)) e.preventDefault();
  }
}
