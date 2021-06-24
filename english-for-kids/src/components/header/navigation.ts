import { BaseComponent } from '../BaseComponent';
import { MenuToggle } from './menuToggle';
import { NavigationList } from './navigationList';
import { CardsModel } from '../shared/cardsModel';

export class Navigation extends BaseComponent {
  private readonly menuToggle: MenuToggle;

  private readonly navigationList: NavigationList;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[]) {
    super(parentNode, 'nav', ['navigation']);
    this.menuToggle = new MenuToggle(this.element);
    this.navigationList = new NavigationList(this.element, state);
  }
}
