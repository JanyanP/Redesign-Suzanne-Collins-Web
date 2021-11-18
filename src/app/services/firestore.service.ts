import { Injectable, ReflectiveInjector } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Preguntas } from '../models/preguntas';
import { User } from '../models/preguntas';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private dbAsked = '/asked';
  private dbUsers = '/users';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  preguntasRef: AngularFireList<Preguntas>=null;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  usersRef: AngularFireList<User>=null;

  constructor(private database: AngularFireDatabase, public auth: AngularFireAuth, public firestore: AngularFirestore) {
    this.preguntasRef = database.list(this.dbAsked);
    this.usersRef = database.list(this.dbUsers);
   }


  create(pregunta: Preguntas): any{
    return this.preguntasRef.push(pregunta);
  }

  loginWithEmail(account){
     try{
      // console.log('email: ', account.email);
      // console.log('password: ', account.password);
      return this.auth.signInWithEmailAndPassword(account.email,account.password);
     }catch(err){
      alert('System not available');
      console.log('error en login: ', err);
      return null;
     }
     //return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data){
     try{
      return this.auth.createUserWithEmailAndPassword(data.email, data.password)/*.then(()=>{
        this.auth.onAuthStateChanged(user=>{
          if(user){
            user.updateProfile({
              displayName: data.name
            });
          }
        });
      }

      )*/;
     }catch(err){
      console.log('Not possible. ');
      return null;
     }
  }

  createUser(user: User): any{
     return this.usersRef.push(user);
     //return this.database.list(this.dbUsers +'/'+ user.email).push(user);
  }

  getUserLogged(){
    return this.auth.authState;
  }

  logout(){
    this.auth.signOut();
  }


//janyan.rodriguez.271@gmail.com

}

