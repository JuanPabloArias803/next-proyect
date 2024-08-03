export interface IUser {
    email: string;
    password: string;
}

export interface ICity{
    latitude:string;
    longitude:string;
}

export interface ICityReport{
    name:string;
    value:ICity;
}