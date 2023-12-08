import { Component } from '@angular/core';
import {Question} from "../../../core/objects/models/question.model";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  protected _currentQuestion: number = 0;
  protected _listQuestion: Question[] = [];

}
