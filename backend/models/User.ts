export default interface Profile {
    name: string;
    age: number;
    email: string;
    phone: string;
    state: string;
    city: string;
    address: string;
    username: string;
    push_token?: string;
    uid?: string;
}