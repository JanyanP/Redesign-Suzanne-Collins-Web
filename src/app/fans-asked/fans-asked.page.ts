import { Component, OnInit } from '@angular/core';
import { Preguntas } from '../models/preguntas';
import { FirestoreService } from '../services/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-fans-asked',
  templateUrl: './fans-asked.page.html',
  styleUrls: ['./fans-asked.page.scss'],
})
export class FansAskedPage implements OnInit {

  pregunta: Preguntas = new Preguntas();
  datosSuministrados = false;

  userLogged= this.userservice.getUserLogged();
  public q: any;
  public user: any;


  constructor(private firestoreservices: FirestoreService, private userservice: FirestoreService) {

   }

  emailAlert(){
    Swal.fire({
      html: '<div class="alert">An email with your Q has been sent to you, please wait for Suzanne to answer</div>',
      background: '#3c0501',
      backdrop: '3c05014d',
      icon: 'info',
      iconColor: '#ffffff',
      showConfirmButton: true,
      //timer: 3000,
      //timerProgressBar: true,
      confirmButtonColor: '#ffffff',
      confirmButtonText: '<ion-text class="ok">OK</ion-text>'
    });
  }
  emailError(){
    Swal.fire({
      html: '<div class="swalTitleAlert">Your question cannot be sent. Make sure you are signed in.</div>',
      background: '#ffffff',
      backdrop: '3c05014d',
      icon: 'error',
      iconColor: '#3c0501',
      showConfirmButton: true,
      //timer: 3000,
      //timerProgressBar: true,
      confirmButtonColor: '#3c0501',
      confirmButtonText: '<ion-text class="okBtn">OK</ion-text>'
    });
  }




  logout(){
      this.userservice.logout();
    }

  guardarPregunta(): void{
      this.userservice.getUserLogged().subscribe(res=>{
        const emailR = res?.email;
        this.firestoreservices.create({email: emailR, q: this.q}).then(() =>{
            this.emailAlert();
        });
      });
    }

  nuevaPregunta(): void{
    this.datosSuministrados = false;
    this.pregunta = new Preguntas();
  }


  ngOnInit() {
  }

}
