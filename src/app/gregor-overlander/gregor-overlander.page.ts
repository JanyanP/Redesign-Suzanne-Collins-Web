import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-gregor-overlander',
  templateUrl: './gregor-overlander.page.html',
  styleUrls: ['./gregor-overlander.page.scss'],
})
export class GregorOverlanderPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 400
  };

  slideOptsCritics = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed:1000
   };

  constructor() { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  ngOnInit() {
  }

}
