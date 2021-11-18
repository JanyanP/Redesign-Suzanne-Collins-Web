import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-charlie-mc-button',
  templateUrl: './charlie-mc-button.page.html',
  styleUrls: ['./charlie-mc-button.page.scss'],
})
export class CharlieMcButtonPage implements OnInit {

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

  ngOnInit() {
  }

}
