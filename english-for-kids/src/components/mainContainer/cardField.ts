import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';
import { Card } from '../card/card';

export class CardField extends BaseComponent {
  private cards: CardsModel[] = [];

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCardsCategory(cards: CardsModel[], mode: string): void {
    this.cards = cards;
    this.cards.forEach((card) => {
      new Card(this.element).renderCategory(card, mode);
    });
  }

  addCardsItems(cards: CardsModel[], mode: string, id: string): void {
    this.clear();
    this.cards = cards;

    this.cards.forEach((card) => {
      if (card.category === id) {
        card.items.forEach((item) => {
          new Card(this.element).renderItem(item, mode);
        });
      }
    });
  }
}
