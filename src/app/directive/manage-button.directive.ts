import { Directive, Renderer2, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appManageButton]'
})
export class ManageButtonDirective implements OnInit {

  @HostBinding('class.open') openButton = false;
  constructor( private elementRef : ElementRef , private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.addClass(this.elementRef.nativeElement, 'open');
    console.log(this.elementRef.nativeElement)
  }

  @HostListener('click') open(){
    this.openButton = !this.openButton;
  }

}
