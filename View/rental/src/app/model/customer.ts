export class Customer {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public role: string = "ROLE_USER";
    public phone!: string;
    public address!: string;
    public favlist!: Favourite[];

    constructor() {

    }
}

export interface Favourite {
    id: number;
    placeid: number;
}
