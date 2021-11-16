import { Component, OnInit } from '@angular/core';
import { Preguntas } from '../models/preguntas';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-fans-asked',
  templateUrl: './fans-asked.page.html',
  styleUrls: ['./fans-asked.page.scss'],
})
export class FansAskedPage implements OnInit {

  pregunta: Preguntas = new Preguntas();
  datosSuministrados = false;

  constructor(private firestoreservices: FirestoreService) { }

  guardarPregunta(): void{
    this.firestoreservices.create(this.pregunta).then(() =>{
      console.log('Pregunta creada y guardada con exito');
      this.datosSuministrados = true;
    });

  }

  nuevaPregunta(): void{
    this.datosSuministrados = false;
    this.pregunta = new Preguntas();
  }


  ngOnInit() {
  }

}
