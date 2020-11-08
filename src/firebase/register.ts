import 'firebase/firestore';
import FirebaseApp from './init';

export const Register = {
  Auth: {},
  Database: {
    async getUserToRegister() {
      const db = await FirebaseApp.firestore()
        .collection('users')
        .doc('l666Yaxyegnu2J3z9kr5')
        .get();
    },

    async createUser(data: any) {
      const db = await FirebaseApp.firestore().collection('users');
      return db.add(data);
    },
  },
};
