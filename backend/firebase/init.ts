import * as firebase from 'firebase';
import { config } from './config';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
export default firebase.initializeApp(config);
