/* eslint-disable @typescript-eslint/quotes */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));




//INICIALIZACION FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF-LcDPy8fDKCSoBhCJRMDAvjcjWH80VY",
  authDomain: "suzannecollins-aa6a4.firebaseapp.com",
  projectId: "suzannecollins-aa6a4",
  storageBucket: "suzannecollins-aa6a4.appspot.com",
  messagingSenderId: "573507894452",
  appId: "1:573507894452:web:be23bc84b8f92975806be1",
  measurementId: "G-WSC0QPKXXB",
  databaseURL: "https://suzannecollins-aa6a4-default-rtdb.firebaseio.com/",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get a reference to the database service
const database = getDatabase(app);
