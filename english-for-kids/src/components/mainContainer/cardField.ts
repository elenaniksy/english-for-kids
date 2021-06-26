import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';

export class CardField extends BaseComponent {
  private cards: CardsModel[] = [];

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: CardsModel[]): void {
    this.cards = cards;
    this.cards.forEach((card) => {
      console.log(card.category);
    });
  }
}
