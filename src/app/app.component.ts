import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBM6i5rFcl6IUyAsGJvMIP2QBjzxH2ZQuA",
      authDomain: "ng-recipe-book-28a07.firebaseapp.com"
    })
  }
onNavigate(feature: string){
  this.loadedFeature = feature;
}

}
