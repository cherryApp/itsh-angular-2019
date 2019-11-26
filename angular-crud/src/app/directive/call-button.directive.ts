import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
// declare var $: any; // ADD THIS
import * as $ from 'jQuery';

@Directive({
  selector: '[appCallButton]'
})
export class CallButtonDirective implements OnInit {

  /* popover: any = $(this.er.nativeElement).popover({
    content: this.er.nativeElement.innerHTML,
    title: 'Call this'
  }); */
  @HostListener('mouseover') onHover() {
    (this.er.nativeElement as HTMLDivElement).classList.add('bg-danger');
  }
  @HostListener('mouseout') onOut() {
    (this.er.nativeElement as HTMLDivElement).classList.remove('bg-danger');
  }


  constructor(
    private er: ElementRef,
  ) { }

  ngOnInit() {

  }

}
