import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductDirective]'
})
export class ProductDirectiveDirective {

  @Input() appProductDirective: any;
  @Input() leave: string = '';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight(this.appProductDirective);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(this.leave);
  }

  hightlight(color: String) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition= "0.5s all";
  }
}
