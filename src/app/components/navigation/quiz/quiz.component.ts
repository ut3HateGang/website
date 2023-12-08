import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../core/objects/models/question.model";
import {Quizstatetype} from "../../../core/objects/enums/quizstatetype";
import {QuestionService} from "../../../core/services/data/question.service";
import {Icon} from "../../../core/objects/enums/icon.enum";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  protected _currentQuestion: number = 0;
  protected _listQuestion: Question[] = [];
  protected _quizstate: Quizstatetype = Quizstatetype.QUESTION;


  constructor(private __questionService: QuestionService) {
  }

  ngOnInit() {
    this._listQuestion = this.__questionService.getTenQuestions()
  }

  protected readonly Quizstatetype = Quizstatetype;
}
