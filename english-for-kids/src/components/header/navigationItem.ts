import { BaseComponent } from '../BaseComponent';

export class NavigationItem extends BaseComponent {
  private innerLink: BaseComponent;
  constructor(private parentNode: HTMLElement, linkText: string) {
    super(parentNode, 'li', ['navigation__item']);
    this.innerLink = new BaseComponent(this.element, 'a', ['navigation__link'], linkText);
    this.innerLink.element.href = `#${linkText}`;
  }
}
