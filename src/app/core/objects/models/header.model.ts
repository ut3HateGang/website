import {Icon} from 'src/app/core/objects/enums/icon.enum';
import {Page} from 'src/app/core/objects/enums/page.enum';

export class HeaderItem {
  link: string = '';
  image?: string;
  text: string = '';
  value?: Page;
  icon?: Icon;

  constructor(
      link: string, image: string | undefined, text: string,
      value: Page | undefined,
      icon: Icon | undefined) {
    this.link = link;
    this.image = image;
    this.text = text;
    this.value = value;
    this.icon = icon;
  }
}