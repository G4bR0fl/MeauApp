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
        Pet: {
            async listAdoption() {
                const db = FirebaseApp.firestore().collection('pets')
                const snapshot = await db.get()
                return snapshot.docs.map(doc => doc.data())
            },
        }
    }
}