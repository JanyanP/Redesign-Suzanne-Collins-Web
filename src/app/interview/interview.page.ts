import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {


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
