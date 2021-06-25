import { BaseComponent } from '../BaseComponent';
import { Navigation } from './navigation';
import { CardsModel } from '../shared/cardsModel';
import { Switcher } from './switcher';

export class Header extends BaseComponent {
  private readonly navigation: Navigation;

  private readonly switcher: Switcher;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[]) {
    super(parentNode, 'header', ['header']);
    this.navigation = new Navigation(this.element, state);
    this.switcher = new Switcher(this.element);
  }
}
