import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    elNative.src = 'https://scontent.fclq2-1.fna.fbcdn.net/v/t39.30808-6/357757034_571700151843556_5344963088243912142_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2285d6&_nc_ohc=rwkQwRkDtAwQ7kNvgF3qjkI&_nc_zt=23&_nc_ht=scontent.fclq2-1.fna&_nc_gid=APoILQ-Vdz4NOYhyOe8ONuO&oh=00_AYBZ20gi0T5Oq6xhEGWb8gSjAPzrvWe_4Fjv3JG516EdCg&oe=674EBF27'; 
  }
  constructor(private elHost: ElementRef) {
    // console.log(this.elHost);
  }

}
