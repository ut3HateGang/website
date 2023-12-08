import {Injectable} from "@angular/core";
import {Question} from "../../objects/models/question.model";
import * as questions from "src/assets/data/questions.json";

@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    protected _questions: Question[] = [];

    constructor() {
        let importedQuestion: any[] = questions;
        this._questions= importedQuestion as Question[];
    }

    public getTenQuestions(): Question[] {
        let returnQuestions: Question[] = [];
        let max = this._questions.length < 10 ? this._questions.length : 10
        let aleaNumbers = this.__generateTenNumbers(max);

        for (const number of aleaNumbers) {
            returnQuestions.push(this._questions[number]);
        }

        return returnQuestions;
    }

    private __generateTenNumbers(max: number): number[] {
        let generatedNumbers: number[] = [];
        while (generatedNumbers.length < max && generatedNumbers.length < 10) {
            let randomNumber = Math.floor(Math.random() * max);

            if (!generatedNumbers.includes(randomNumber)) {
                generatedNumbers.push(randomNumber);
            }
        }
        return generatedNumbers;
    }

}
