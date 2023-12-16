import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedgl]'
})
export class RedglDirective {

  constructor(el:ElementRef) {

    el.nativeElement.style.color="red";
   }
  

}
