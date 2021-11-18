import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-gregor-curse-warmbloods',
  templateUrl: './gregor-curse-warmbloods.page.html',
  styleUrls: ['./gregor-curse-warmbloods.page.scss'],
})
export class GregorCurseWarmbloodsPage implements OnInit {

userLogged= this.userservice.getUserLogged();


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

  constructor(private userservice: FirestoreService){ }

  loggedUser(){
    this.userservice.getUserLogged().subscribe(res=>{
      console.log(res?.email) ;
    });
  }

  logout(){
    this.userservice.logout();
  }onstructor() { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
