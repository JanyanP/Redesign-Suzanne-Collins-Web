import { Component, OnInit } from '@angular/core';
import { Preguntas } from '../models/preguntas';
import { FirestoreService } from '../services/firestore.service';
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


constructor(private userservice: FirestoreService) {
}


  emailAlert(){
    Swal.fire({
      html: '<div class="alert">We have received your question, please wait for Suzanne to answer</div>',
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
      this.userservice.create({email: emailR, q: this.q}).then(async () =>{
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
//sstlaffwzgszscdw
}
