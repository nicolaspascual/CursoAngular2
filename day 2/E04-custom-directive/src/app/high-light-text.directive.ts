import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appHighLightText]'
})
export class HighLightTextDirective {

  private elemRef: ElementRef;

  constructor(elemRef : ElementRef) { 
    this.elemRef = elemRef;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.elemRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elemRef.nativeElement.style.backgroundColor = null;
  }


}
