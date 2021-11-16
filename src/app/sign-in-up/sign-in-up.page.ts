import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.page.html',
  styleUrls: ['./sign-in-up.page.scss'],
})
export class SignInUpPage implements OnInit {

  passwordType = 'password';
  passwordShown=false;

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

}
