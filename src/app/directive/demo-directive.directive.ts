import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDemoDirective]',
})
export class DemoDirectiveDirective {
  @Input() appDemoDirective: any;
  @Input() leave: string = '';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight(this.appDemoDirective);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(this.leave);
  }

  hightlight(color: String) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition= "0.5s all";
  }
}
