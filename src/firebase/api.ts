import * as firebase from 'firebase';
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
    }
}