import { Profile } from '@backend/models/User';
import { DocumentReference } from '@google-cloud/firestore';
import React from 'react';

export type Session = {
  profile: Profile;
  ref: DocumentReference;
};

const AuthContext: React.Context<Session | undefined> = React.createContext(
  undefined as any
);

export default AuthContext;
