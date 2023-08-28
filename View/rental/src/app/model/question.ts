import { Answer } from "./answer";

export class Question {
    public id!: number;
    public question!: string;
    public cid!: number;
    public cname!: string;
    public answers!: Answer[]
    constructor() {

    }
}
