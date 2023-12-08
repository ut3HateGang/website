import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quizstatetype} from "../../../../core/objects/enums/quizstatetype";
import {Question} from "../../../../core/objects/models/question.model";

@Component({
  selector: 'propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.scss']
})
export class PropositionsComponent {
  @Input() propositions!: string[];
  @Output() choose: EventEmitter<string> = new EventEmitter<string>();

  chooseItem(item: string) {
    this.choose.emit(item);
  }

}
