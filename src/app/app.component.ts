import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankVisionDemo';

  constructor(private router: Router){
  }
  
  ViewAll(){
    console.log("pulsa ver todo");
    this.router.navigate(["viewall"]);
  }
  
  CreateUser(){
    this.router.navigate(["create"]);
  }

  SaveEdited(){
    this.router.navigate(["saveedited"]);
  }

  Help(){
    alert("This app lets you manage the CRUD for an user (Create, Read, Update, Delete)");
  }
}


