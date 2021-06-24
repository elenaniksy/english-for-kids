import { BaseComponent } from '../BaseComponent';

export class NavigationItem extends BaseComponent {
  constructor(private parentNode: HTMLElement, linkText: string) {
    super(parentNode, 'li', ['navigation__item']);
    this.element.innerHTML = linkText;
  }
}
