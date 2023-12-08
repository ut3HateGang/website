import {Component, Input} from '@angular/core';

@Component({
  selector: 'explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent {
  @Input() details!: string;
}
