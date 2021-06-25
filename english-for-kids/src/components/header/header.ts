import { BaseComponent } from '../BaseComponent';
import { Navigation } from './navigation';
import { CardsModel } from '../shared/cardsModel';
import { Switcher } from './switcher';

export class Header extends BaseComponent {
  private readonly navigation: Navigation;

  private readonly switcher: Switcher;

  private mode: string;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[], mode: string) {
    super(parentNode, 'header', ['header']);
    this.mode = mode;
    this.navigation = new Navigation(this.element, state, mode);
    this.switcher = new Switcher(this.element, mode);
  }
}
