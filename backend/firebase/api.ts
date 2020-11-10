import * as firebase from 'firebase';
import 'firebase/firestore';
import { Session } from '../../src/firebase/auth.context';
//import Pessoa from '../firebase/models/Pessoa';
import Profile from '../models/User';
import FirebaseApp from './init';



export const Api = {
  Auth: {
    async signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      FirebaseApp.auth().signInWithPopup(provider)
    },
    async signInWithEmail({ email, password }: { email: string; password: string }) {
      return await FirebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
        });
    },
    async createUser({ email, password }: { email: string, password: string }, profile: Profile) {
      try {
        const auth = await FirebaseApp.auth().createUserWithEmailAndPassword(email, password)
        const uid = auth.user?.uid
        profile.uid = uid as string
        const db = FirebaseApp.firestore().collection('users')
        return db.add(profile)
      } catch (error) {
        console.log(error)
      }
    },
    async currentUser(): Promise<Session | undefined> {
      try {
        const user = await FirebaseApp.auth().currentUser
        const db = FirebaseApp.firestore().collection('users')
        const query = (await db.get()).query.where('uid', '==', user?.uid)
        const result = await (await query.get()).docs[0]
        return { profile: result.data() as Profile, ref: result.ref }
      } catch (error) {
        return undefined
      }
    },
    async signOut() {
      return FirebaseApp.auth().signOut()
    }
  },
  Database: {
    Pet: {
      async listAdoption() {
        const db = FirebaseApp.firestore().collection('pets')
        const snapshot = await db.get()
        return snapshot.docs.map(doc => doc.data())
      },
    },
    Profile: {
      async updatePushToken(token: string) {
        const currentUser = FirebaseApp.auth().currentUser
        const db = FirebaseApp.firestore().collection('users')
        const doc = db.doc(currentUser?.uid)
        doc.set({ token }, { merge: true })
        return FirebaseApp.auth().currentUser
      },
    },
    async getPetToAdoption() {
      const db = FirebaseApp.firestore().collection('pets')
      return db.get()
    },
    async createPet(data: any) {
      const db = FirebaseApp.firestore().collection('pets')
      return db.add(data)
    },
  }
}

