import * as firebase from 'firebase';
import 'firebase/firestore';
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
        async signOut() {
            return FirebaseApp.auth().signOut()
        }
    },
    Database: {
        async getPetToAdoption() {
            const db = FirebaseApp.firestore().collection('pets')
            return db.get()
        },
        async createPet(data: any) {
            const db = FirebaseApp.firestore().collection('pets')
            return db.add(data)
        },
        Pet: {
            async listAdoption() {
                const db = FirebaseApp.firestore().collection('pets')
                const snapshot = await db.get()
                return snapshot.docs.map(doc => doc.data())
            },
        }
    }
}