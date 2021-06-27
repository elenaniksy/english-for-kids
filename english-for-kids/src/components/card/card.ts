import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';
import { CardModelItem } from '../shared/cardModelItem';

export class Card extends BaseComponent {
  private readonly cardHolder: HTMLDivElement;

  private readonly cardFront: HTMLDivElement;

  private readonly cardBack: HTMLDivElement;

  private image: HTMLImageElement;

  private header: BaseComponent;

  private cardButton: BaseComponent;

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['card__container']);
    this.cardHolder = document.createElement('div');
    this.cardHolder.classList.add('card');

    this.cardFront = document.createElement('div');
    this.cardFront.classList.add('card__front');

    this.image = document.createElement('img');
    this.image.classList.add('card__image');
    this.header = new BaseComponent(this.cardHolder, 'h3', ['card__header']);
    this.cardButton = new BaseComponent(this.cardHolder, 'button', ['card__button']);

    this.cardBack = document.createElement('div');
    this.cardBack.classList.add('card__back');
  }

  renderCategory(element: CardsModel, mode: string) {
    this.cardHolder.classList.add('column');
    this.header.element.innerHTML = `${element.category}`;
    this.cardButton.element.innerHTML = 'Select';
    this.cardButton.element.id = `${element.category}`;

    this.image.src = `${element.items[0].image}`;

    if (mode === 'train') {
      this.cardButton.removeClass('red');
      this.cardButton.addClass('green');
    }

    if (mode === 'play') {
      this.cardButton.removeClass('green');
      this.cardButton.addClass('red');
    }

    this.cardHolder.append(this.image, this.cardButton.element);
    this.element.append(this.cardHolder);
  }

  renderItem(element: CardModelItem, mode: string) {
    this.image.src = `${element.image}`;
    this.header.element.innerHTML = `${element.word}`;

    const backImage = document.createElement('img');
    backImage.classList.add('card__image');
    backImage.src = `${element.image}`;

    const backHeader = document.createElement('h3');
    backHeader.innerHTML = `${element.translation}`;

    this.cardFront.append(this.image, this.header.element);
    this.cardBack.append(backImage, backHeader);
    this.cardHolder.append(this.cardFront, this.cardBack);
    this.element.append(this.cardHolder);

    this.element.onclick = () => {
      this.addClass('flipped');
    };
  }
}
