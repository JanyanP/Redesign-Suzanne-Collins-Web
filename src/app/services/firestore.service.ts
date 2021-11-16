import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Preguntas } from '../models/preguntas';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private dbAsked = '/asked';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  preguntasRef: AngularFireList<Preguntas>=null;

  constructor(private database: AngularFireDatabase) {
    this.preguntasRef = database.list(this.dbAsked);
   }

   create(pregunta: Preguntas): any{
    return this.preguntasRef.push(pregunta);
   }


}

