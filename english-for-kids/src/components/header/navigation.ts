import { BaseComponent } from '../BaseComponent';
import { MenuToggle } from './menuToggle';
import { CardsModel } from '../shared/cardsModel';

export class Navigation extends BaseComponent {
  private readonly menuToggle: MenuToggle;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[], mode: string) {
    super(parentNode, 'nav', ['navigation']);
    this.menuToggle = new MenuToggle(this.element, state, mode);
  }

  changeMenuColor(change: string): void {
    this.menuToggle.changeColor(change);
  }
}
