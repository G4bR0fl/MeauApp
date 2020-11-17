import { Animal, CrossUserAnimal, Intent } from '@backend/models/Animal';
import { DocumentSnapshot } from '@google-cloud/firestore';
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
      const currentUser = await Auth.currentUser()
      const db = FirebaseApp.firestore().collection('pets')
      const snapshot = await (await db.get()).query
        .where('intent', 'array-contains', 'adocao' as Intent)
        .where('owner', '!=', currentUser?.ref)
        .get()
      return snapshot.docs.map(item => item)
    },
    async createPet(data: Animal) {
      const currentUser = await Auth.currentUser()
      const db = FirebaseApp.firestore().collection('pets')
      const response = await fetch(data.photo);
      const blob = await response.blob();
      const photo = FirebaseApp.storage().ref('pets').put(blob)
      data.owner = currentUser?.ref
      data.photo = (await (await photo).ref.getDownloadURL()) as string
      return db.add(data)
    },
    async pretetionToAdoption(animal: DocumentSnapshot) {
      const currentUser = await Auth.currentUser()
      const data: Animal = animal.data() as Animal
      animal.ref.collection('interest').add({ user: currentUser?.ref } as CrossUserAnimal)
      const owner = (await data.owner.get()).data() as Profile
      Database.Profile.sendNotification({
        token: owner.deviceToken,
        data: {
          title: `${data.nome} pode ter um novo dono`,
          body: `${currentUser?.profile.name} quer adotá-lo`
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
    async listOwnedPets() {
      const currentUser = await Auth.currentUser()
      const db = FirebaseApp.firestore().collection('pets')
      const snapshot = await (await db.get()).query.where('owner', '==', currentUser?.ref).get()
      return snapshot.docs.map(item => item)
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
}

export const Api = {
  Auth,
  Database
}

