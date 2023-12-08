import {Component, Input} from '@angular/core';

@Component({
  selector: 'intitule',
  templateUrl: './intitule.component.html',
  styleUrls: ['./intitule.component.scss']
})
export class IntituleComponent {
    @Input() intitule!: string;
}
