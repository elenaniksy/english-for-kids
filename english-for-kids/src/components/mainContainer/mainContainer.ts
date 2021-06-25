import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';

export class MainContainer extends BaseComponent {
  constructor(private parentNode: HTMLElement, state: [] | CardsModel[]) {
    super(parentNode, 'div', ['main-container']);
  }
}
