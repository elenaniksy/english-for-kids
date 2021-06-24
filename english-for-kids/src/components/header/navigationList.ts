import { BaseComponent } from '../BaseComponent';
import { NavigationItem } from './navigationItem';
import { CardsModel } from '../shared/cardsModel';

export class NavigationList extends BaseComponent {
  private readonly state: [] | CardsModel[];

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[]) {
    super(parentNode, 'ul', ['navigation__list', 'green']);
    this.state = state;
    this.renderList();
  }

  renderList(): void {
    this.state.forEach((item: CardsModel) => {
      const link = new NavigationItem(this.element, item.category);
      this.element.append(link.element);
    });
  }
}
