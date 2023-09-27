import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'p[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  color: string | undefined;

  @Input('background-color')
  backgroundColor: string | undefined;

  @Input('base-color')
  baseColor = 'transparent';

  ngOnInit() {
    this.color = this.baseColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.backgroundColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.color = this.baseColor;
  }
}
