import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';
import { CardField } from './cardField';
import { Card } from '../card/card';

export class MainContainer extends BaseComponent {
  private mode: string;

  private state: [] | CardsModel[];

  private cardField: CardField;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[], mode: string) {
    super(parentNode, 'div', ['main-container']);
    this.mode = mode;
    this.state = state;
    this.cardField = new CardField(this.element);
    this.renderStartCategory();
  }

  renderStartCategory() {
    this.cardField.clear();
    this.cardField.addCardsCategory(this.state, this.mode);
  }

  changeMode(mode: string) {
    this.mode = mode;
    this.renderStartCategory();
  }
}
