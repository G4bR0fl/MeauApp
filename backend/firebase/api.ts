import { Animal } from '@backend/models/Animal';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Session } from '../../src/components/auth/auth.context';
import { Profile } from '../models/User';
import FirebaseApp from './init';

const Auth = {
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
}

const Database = {
  Pet: {
    async listAdoption() {
      const db = FirebaseApp.firestore().collection('pets')
      const snapshot = await db.get()
      return snapshot.docs
    },
    async pretetionToAdoption(animal: Animal | any) {
      const currentUser = Auth.currentUser()
      const data: Animal = animal.data()
      const owner: Profile = data.owner
      Database.Profile.sendNotification({
        token: owner.deviceToken,
        data: {
          title: 'Quero adotar',
          body: 'O nome do pet é ' + data.nome
        }
      })
    }
  },
  Profile: {
    async updatePushToken(token: string) {
      const { profile, ref } = await Auth.currentUser() as Session
      ref.set({ deviceToken: token }, { merge: true })
      return ref
    },
    async sendNotification({
      token,
      data = {
        title: "\uD83D\uDCE7 You've got mail",
        body: 'Hello world! \uD83C\uDF10'
      }
    }: any) {
      try {
        const message = {
          to: token,
          title: data.title,
          body: data.body
        }
        const headers = {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json'
        }
        const response = await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(message),
        })
        console.log('success')
        console.log(response)
      } catch (error) {
        console.log('fail')
        console.log(error)
      }
    }
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

export const Api = {
  Auth,
  Database
}

