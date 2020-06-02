import { Component, OnInit, ViewChild } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { NzCarouselBaseStrategy, NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-ad-single-carousel',
  templateUrl: './ad-single-carousel.component.html',
  styleUrls: ['./ad-single-carousel.component.scss']
})
export class AdSingleCarouselComponent implements OnInit {

  @ViewChild(NzCarouselComponent, { static: false }) myCarousel: NzCarouselComponent;

 cars = [ {
   number: 1
 },
{
  number: 2
}]

  constructor() { }

  ngOnInit() {
  }

  next() {
    console.log(this.myCarousel.activeIndex)
    this.myCarousel.next();
  }

  pre() {
    this.myCarousel.pre();
  }

}
