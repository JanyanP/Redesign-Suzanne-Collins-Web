import { Component } from '@angular/core';

import { FirestoreService } from '../services/firestore.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


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

  welcomeAlert(){
    Swal.fire({
      html: '<div><ion-text class="welcomeT">Welcome!</ion-text><br><br>'+
      '<ion-text class="welcomet">Hi! Thanks for visiting my website. Here’s a picture of me '+
      'with a rat in Central Park. If you’ve read my fantasy '+
       'series, The Underland Chronicles, you will have a clue '
        +'as to why I chose this photo. If not, you may want '
        + 'to click around and find out a little more about my '
         + 'books.</ion-text></div>',
      background: '#ffffff',
      //backdrop: '3c05014d',
      showConfirmButton: true,
      imageUrl: 'assets/image/centralPark.jpg',
      confirmButtonColor: '#fed703',
      confirmButtonText: '<ion-text class="ok">Go back</ion-text>'
    });
  }

  welcome(){
    this.welcomeAlert();
  }
  /*WELCOME!
Hi! Thanks for visiting my website. Here’s a picture of me
 with a rat in Central Park. If you’ve read my fantasy
  series, The Underland Chronicles, you will have a clue
   as to why I chose this photo. If not, you may want
    to click around and find out a little more about my
     books.  */
}
