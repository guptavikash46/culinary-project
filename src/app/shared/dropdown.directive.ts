import { Directive, HostListener,
HostBinding, 
ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.dropdown-content') dropdownContent: boolean = false;
  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event']) onRecipeManageDropdown(event: Event) {
    this.dropdownContent = this.elRef.nativeElement.contains(event.target) ? !this.dropdownContent : false;
  }

}
