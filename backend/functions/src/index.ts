import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import { Animal } from '../../models/Animal';
import User from '../../models/User';


admin.initializeApp()

export function requestAdoption() {
    functions.firestore.document('/pets/{id}').onUpdate(async (snap, context) => {
        const data = snap.after.data() as Animal
        const owner = await (await data.owner.get()).data()
        sendOwnerAdoptionIntent(owner)
    })
}

function sendOwnerAdoptionIntent(owner: User | undefined) {
    const message = [{
        body: 'Hello',
        to: owner?.push_token ?? ''
    }]
    fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
}

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
