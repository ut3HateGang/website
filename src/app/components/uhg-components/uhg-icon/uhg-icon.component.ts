import {Component, Input} from '@angular/core';
import {Icon} from 'src/app/core/objects/enums/icon.enum';

@Component({
  selector   : 'uhg-icon',
  templateUrl: './uhg-icon.component.html',
  styleUrls  : ['./uhg-icon.component.scss'],
})
export class UhgIconComponent {
  @Input() size: number = 20;
  @Input() icon!: Icon;
}
