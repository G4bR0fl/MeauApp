import { Profile } from '@backend/models/User';
import React from 'react';

export type Session = {
  profile: Profile;
  ref: firebase.firestore.DocumentData['ref'];
};

const AuthContext: React.Context<Session | undefined> = React.createContext(
  undefined as any
);

export default AuthContext;
