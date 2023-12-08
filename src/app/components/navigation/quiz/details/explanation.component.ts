import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent {
  @Input() details!: string;
  @Input() sources!: string[];
  @Input() error!:boolean;
  @Output() next: EventEmitter<any> = new EventEmitter<any>()
  protected readonly onclick = onclick;

  onclickNext() {
    this.next.emit()
  }
}
