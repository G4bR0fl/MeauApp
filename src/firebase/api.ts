import * as firebase from 'firebase';
import 'firebase/firestore';
import Animal from '../firebase/models/Animal';
import Pessoa from '../firebase/models/Pessoa';
import FirebaseApp from './init';

export const Api = {
  Auth: {
    async signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      FirebaseApp.auth().signInWithPopup(provider);
    },
    async signInWithEmail({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) {
      return await FirebaseApp.auth()
        .signInWithEmailAndPassword(email, password)

        .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
        });
    },
    async signOut() {
      return FirebaseApp.auth().signOut();
    },
  },
  Database: {
    async getPetToAdoption() {
      const db = FirebaseApp.firestore().collection('pets');
      return db.get();
    },
    async createPet(data: Animal) {
      const db = FirebaseApp.firestore().collection('pets');
      return db.add(data);
    },
    // Query que puxa todos os atributos de todos IDs do documento /users
    async getUsers() {
      FirebaseApp.firestore()
        .collection('users')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            console.log(doc.id, '=>', doc.data());
          });
        });
    },
    // Compara user atual com existente
    // async checkUsers(){
    //     var user = FirebaseApp.firestore().collection('users');
    // },
    // Criação de usuário
    async createUser(data: Pessoa) {
      const db = FirebaseApp.firestore().collection('users');
      return db.add(data);
    },
  },
};
