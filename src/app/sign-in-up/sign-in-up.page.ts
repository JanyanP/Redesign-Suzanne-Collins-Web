import { Component, OnInit } from '@angular/core';
import { User} from '../models/preguntas';
import { FirestoreService } from '../services/firestore.service';
import { NavController } from '@ionic/angular';


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
          alert('account created');
        },err=>{
          console.log(err);
        });
      }
    }, err=>{
      alert(err.message);
      console.log(err);
    });
  }

  login(){
    //console.log('email: ',this.emailS);
    //console.log('password: ',this.passwordS);
   // const {emailS, passwordS}= this.usuario;
    /*this.userservice.loginWithEmail({email: this.emailS, password: this.passwordS}).then(res=>{
      console.log('Online: ', res);
    });
    */
    this.userservice.loginWithEmail({email: this.emailS, password: this.passwordS}).then(res=>{
      console.log(res);
      if(res.user.uid){
        alert('WELCOME');
        this.navCtr.navigateRoot('/home');
      }
    },err=>{
      alert('Invalid information. Check your input and try again');
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
