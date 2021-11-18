import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
})
export class WorksPage implements OnInit {



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
