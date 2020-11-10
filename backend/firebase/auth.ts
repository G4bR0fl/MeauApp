import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as firebase from 'firebase';
import FirebaseApp from './init';

//https://medium.com/@denisceric94/expo-and-firebase-authentication-email-password-facebook-and-google-681a511c61b6

export class Auth {
    async signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        FirebaseApp.auth().signInWithPopup(provider)
    }

    async signInWithEmail({ email, password }: { email: string; password: string }) {
        return await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                //   if (errorCode == 'auth/weak-password') {
                //       this.onLoginFailure.bind(this)('Weak Password!');
                //   } else {

                //   }
            });
    }

    async signInWithFacebook() {
        try {
            //@ts-ignore
            const { type, token } = await Facebook.logInWithReadPermissionsAsync('684399708713036', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                const facebookProfileData = await firebase.auth().signInWithCredential(credential);
                return facebookProfileData
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }
}

class GoogleAuth extends Auth {
    initAsync = async () => {
        await GoogleSignIn.initAsync({
            // You may ommit the clientId when the firebase `googleServicesFile` is configured
            clientId: '388247497471-4bfjdktmms9ms4rc5gma3nhbh27psbh8.apps.googleusercontent.com'
        });
        this._syncUserWithStateAsync();
    };

    _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        //this.setUser({ user });
    };

    signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        //setUser({ user: null });
    };

    signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                this._syncUserWithStateAsync();
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    };
}

class FacebookAuth {
}

class PlainAuth {
}