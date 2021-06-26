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
    this.navigation = new Navigation(this.element, state, this.mode);
    this.switcher = new Switcher(this.element, this.mode);
  }

  getMode(): string {
    return this.mode;
  }

  setMode(mode: string): void {
    this.mode = mode;
  }

  changeSwitcher(): void {
    if (this.mode === 'train') {
      this.switcher.removeClass('red');
      this.switcher.addClass('green');
      this.navigation.changeMenuColor(this.mode);
    } else {
      this.switcher.removeClass('green');
      this.switcher.addClass('red');
      this.navigation.changeMenuColor(this.mode);
    }
  }
}
