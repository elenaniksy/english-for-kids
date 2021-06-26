import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';

export class Card extends BaseComponent {
  private readonly cardHolder: HTMLDivElement;

  private readonly cardFront: HTMLDivElement;

  private readonly layer: HTMLDivElement;

  private readonly cardBack: HTMLDivElement;

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['card__container']);
    this.cardHolder = document.createElement('div');
    this.cardHolder.classList.add('card');

    this.cardFront = document.createElement('div');
    this.cardFront.classList.add('card__front');

    this.layer = document.createElement('div');

    this.cardBack = document.createElement('div');
    this.cardBack.classList.add('card__back');

    // this.cardHolder.append(this.cardFront, this.cardBack);
    // this.element.append(this.cardHolder);
  }

  renderCategory(element: CardsModel, mode: string) {
    const header = new BaseComponent(this.cardHolder, 'h3', ['green'], `${element.category}`);

    if (mode === 'train') {
      header.removeClass('red');
      header.addClass('green');
    }

    if (mode === 'play') {
      header.removeClass('green');
      header.addClass('red');
    }

    const image = document.createElement('img');
    image.classList.add('card__image');
    image.src = `${element.items[0].image}`;
    this.cardHolder.append(image);
    this.element.append(this.cardHolder);
  }
}
