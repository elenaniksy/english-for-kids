import { BaseComponent } from '../BaseComponent';
import { Navigation } from './navigation';
import { CardsModel } from '../shared/cardsModel';

export class Header extends BaseComponent {
  private readonly navigation: Navigation;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[]) {
    super(parentNode, 'header', ['header']);
    this.navigation = new Navigation(this.element, state);
  }
}
