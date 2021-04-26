export interface User {
    _id?: string;
    password: string;
    fullname?: string;
    posts?: Array<object>;
}
