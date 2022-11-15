import { Directive , HostBinding, HostListener, Input } from "@angular/core";

@Directive(
    {
        selector: '[dirFavorite]'
    }
)

export class FavouriteDirective{
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hover = false;
    @HostListener('mouseenter') oME() {
        this.hover = true;
    }
    @HostListener('mouseleave') oML() {
        if(this.hover === true) 
        this.hover = false;
    }
    @Input() set dirFavorite(i: boolean) {
        this.isFavorite = i
    }
}