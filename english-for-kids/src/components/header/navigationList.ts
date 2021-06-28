import { BaseComponent } from '../BaseComponent';
import { NavigationItem } from './navigationItem';
import { CardsModel } from '../shared/cardsModel';

export class NavigationList extends BaseComponent {
  private readonly state: [] | CardsModel[];

  private mode: string;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[], mode: string) {
    super(parentNode, 'ul', ['navigation__list']);
    this.mode = mode;
    this.state = state;
    this.renderList();
  }

  renderList(): void {
    this.changeClassMode(this.mode);

    this.state.forEach((item: CardsModel) => {
      const link = new NavigationItem(this.element, item.category);
      this.element.append(link.element);
    });
  }
}
