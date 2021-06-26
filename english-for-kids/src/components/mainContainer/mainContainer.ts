import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';
import { CardField } from './cardField';

export class MainContainer extends BaseComponent {
  private readonly mode: string;

  private state: [] | CardsModel[];

  private cardField: CardField;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[], mode: string) {
    super(parentNode, 'div', ['main-container']);
    this.mode = mode;
    this.state = state;
    this.cardField = new CardField(this.element);
    this.cardField.addCards(this.state);
  }
}
