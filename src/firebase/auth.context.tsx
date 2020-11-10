import React from 'react';
import User from '../../backend/models/User';

export type Session = {
  profile: User;
  ref: firebase.firestore.DocumentData['ref'];
};

const AuthContext: React.Context<Session | undefined> = React.createContext(
  undefined as any
);

export default AuthContext;
