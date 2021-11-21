import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-songbirds-and-snakes',
  templateUrl: './songbirds-and-snakes.page.html',
  styleUrls: ['./songbirds-and-snakes.page.scss'],
})
export class SongbirdsAndSnakesPage implements OnInit {


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
