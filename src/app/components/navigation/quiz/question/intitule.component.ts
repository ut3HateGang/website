import {Component, Input} from '@angular/core';
import {Quizstatetype} from "../../../../core/objects/enums/quizstatetype";
import {Question} from "../../../../core/objects/models/question.model";

@Component({
  selector: 'intitule',
  templateUrl: './intitule.component.html',
  styleUrls: ['./intitule.component.scss']
})
export class IntituleComponent {
    @Input() intitule!: string;
    question: Question = new Question();
}
