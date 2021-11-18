import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-biography',
  templateUrl: './biography.page.html',
  styleUrls: ['./biography.page.scss'],
})
export class BiographyPage implements OnInit {

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
