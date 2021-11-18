import { Component, OnInit } from '@angular/core';
import { User} from '../models/preguntas';
import { FirestoreService } from '../services/firestore.service';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.page.html',
  styleUrls: ['./sign-in-up.page.scss'],
})
export class SignInUpPage implements OnInit {

  public name: any;
  public password: any;
  public email: any;

  public passwordS: any;
  public emailS: any;

 // user: User = new User();
 // summit= false;

  passwordType = 'password';
  passwordShown=false;

  //userLogged: any;
  userLogged= this.userservice.getUserLogged();

  constructor(private userservice: FirestoreService, private navCtr: NavController){ }

 /* guardarUser(): void{
    this.userservice.createUser(this.userservice{name, email, password}).then(() =>{
      console.log('User creado con exito');
      this.summit = true;
    });
  }*/
  ngOnInit() {
  }

  public tooglePassword(password,eye){

    if (password.type === 'password') {
      password.type = 'text';
      eye.name = 'eye-off';
    }
    else {
      password.type = 'password';
      eye.name = 'eye';
    }
  }


registroCompleto(){
  Swal.fire({
    timerProgressBar: true,
    timer: 3000,
    background: '#3c0501',
    backdrop: '3c05014d',
    icon: 'success',
    iconColor: '#ffffff',
    html: '<div class="swalTitle"> Signed up successfully</div>',
    showConfirmButton: false,
    //confirmButtonColor: '#ffffff',
    //confirmButtonText: '<ion-text class="okBtn">OK</ion-text>'
  });
}

loginCompleto(){
  Swal.fire({
    html: '<div class="swalTitle"> Signed in successfully</div>',
    background: '#3c0501',
    backdrop: '3c05014d',
    icon: 'success',
    iconColor: '#ffffff',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    //confirmButtonColor: '#ffffff',
    //confirmButtonText: '<ion-text class="okBtn">OK</ion-text>'
  });
}

loginAlert(){
  Swal.fire({
    html: '<div class="swalTitleAlert">Invalid information. Check your inputs are correct and try again</div>',
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

signupAlert(){
  Swal.fire({
    html: '<div class="swalTitleAlert">Invalid information. Your inputs may be incomplete or email account is already registered</div>',
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


  signup(){
    this.userservice.signup({name: this.name, email: this.email, password:this.password}).then(res=>{
      if(res.user.uid){
        const us={
          name: this.name,
          email: this.email,
          password:this.password,
          uid: res.user.uid
        };
        // eslint-disable-next-line @typescript-eslint/no-shadow
        this.userservice.createUser(us).then(res=>{
          this.registroCompleto();
        },err=>{
          console.log(err);
        });
      }
    }, err=>{
      this.signupAlert();
      //alert(err.message);
      console.log(err);
    });
  }

  login(){
    this.userservice.loginWithEmail({email: this.emailS, password: this.passwordS}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.navCtr.navigateRoot('/home');
        this.loginCompleto();
      }
    },err=>{
      this.loginAlert();
      //alert('alert en ts');
      console.log(err);
    });
  }

  loggedUser(){
    this.userservice.getUserLogged().subscribe(res=>{
      console.log(res?.email) ;
    });
  }

  logout(){
    this.userservice.logout();
  }


}
