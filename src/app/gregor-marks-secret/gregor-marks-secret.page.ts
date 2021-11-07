import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-gregor-marks-secret',
  templateUrl: './gregor-marks-secret.page.html',
  styleUrls: ['./gregor-marks-secret.page.scss'],
})
export class GregorMarksSecretPage implements OnInit {

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
