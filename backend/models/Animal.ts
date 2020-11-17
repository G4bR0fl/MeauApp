import { CollectionReference, DocumentReference } from "@google-cloud/firestore";
import { Profile } from "./User";

export default interface BaseAnimal {
    nome: string;
    intent: Intent[];
    especie: 'cachorro' | 'gato';
    sexo: 'M' | 'F';
    porte: 'pequeno' | 'medio ' | 'grande';
    idade: number;
    photo?: string;
}

export type Intent = 'adocao' | 'apadrinhar' | 'ajuda';

export interface CrossUserAnimal {
    user: DocumentReference<Profile>;
}

export interface Animal extends BaseAnimal {
    owner: DocumentReference<Profile>
    toAdoption?: CollectionReference<any> | undefined
}