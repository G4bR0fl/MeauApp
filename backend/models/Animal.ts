import { DocumentReference } from "@google-cloud/firestore";
import Profile from "./User";

export default interface BaseAnimal {
    nome: string;
    especie: 'cachorro' | 'gato';
    sexo: 'M' | 'F';
    porte: 'pequeno' | 'medio ' | 'grande';
}

export interface Animal extends BaseAnimal {
    owner: DocumentReference<Profile>
}