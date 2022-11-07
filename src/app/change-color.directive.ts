import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private ele: ElementRef, private render: Renderer2) {
    this.changeColor('red');
  }

  private changeColor(color: any) {
    this.render.setStyle(this.ele.nativeElement, 'color', color);

  }

}
