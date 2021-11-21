import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

   import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-gregor-prophecy-bane',
  templateUrl: './gregor-prophecy-bane.page.html',
  styleUrls: ['./gregor-prophecy-bane.page.scss'],
})
export class GregorProphecyBanePage implements OnInit {


  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  slideOptsCritics = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed:1000
   };


   userLogged= this.userservice.getUserLogged();

   constructor(private userservice: FirestoreService){ }

  loggedUser(){
    this.userservice.getUserLogged().subscribe(res=>{
      console.log(res?.email) ;
    });
  }

  logout(){
       this.userservice.logout();
     }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
