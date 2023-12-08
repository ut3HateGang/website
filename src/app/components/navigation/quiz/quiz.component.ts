import {Component, OnInit} from '@angular/core';
import {Question} from '../../../core/objects/models/question.model';
import {Quizstatetype} from '../../../core/objects/enums/quizstatetype';
import {QuestionService} from '../../../core/services/data/question.service';
import {
  CurrentPageService,
} from '../../../core/services/site/current-page.service';
import {Page} from '../../../core/objects/enums/page.enum';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  protected _currentQuestion: number = 0;
  protected _listQuestion: Question[] = [];
  protected _quizstate: Quizstatetype = Quizstatetype.QUESTION;
  protected _hasFalse: boolean = false;

  constructor(
    private __currentPageService: CurrentPageService,
    private __questionService: QuestionService) {
  }

  ngOnInit() {
    this.__currentPageService.currentPage = Page.QUIZ;
    this._listQuestion = this.__questionService.getTenQuestions();
  }

  protected readonly Quizstatetype = Quizstatetype;

  choseProposition(item: string) {
    this._hasFalse = !(this._listQuestion[this._currentQuestion].reponse ==
      item);
    this._quizstate = Quizstatetype.ANSWER
  }

  next() {
    this._currentQuestion++;
    this._quizstate = Quizstatetype.QUESTION
  }
}
