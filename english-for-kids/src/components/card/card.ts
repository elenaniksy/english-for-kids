import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';
import { CardModelItem } from '../shared/cardModelItem';

const FLIP_CLASS = 'flipped';
const TIME = 5;

export class Card extends BaseComponent {
  private readonly cardHolder: HTMLDivElement;

  private readonly cardFront: HTMLDivElement;

  private readonly cardBack: HTMLDivElement;

  private image: HTMLImageElement;

  private header: BaseComponent;

  private cardButton: BaseComponent;

  private audio: HTMLAudioElement;

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
    this.audio = new Audio();

    this.cardBack = document.createElement('div');
    this.cardBack.classList.add('card__back');
  }

  renderCategory(element: CardsModel, mode: string): void {
    this.cardHolder.classList.add('column');
    this.header.element.innerHTML = `${element.category}`;
    this.cardButton.element.innerHTML = 'Select';
    this.cardButton.element.id = `${element.category}`;

    this.image.src = `${element.items[0].image}`;
    this.cardButton.changeClassMode(mode);
    this.cardHolder.append(this.image, this.cardButton.element);
    this.element.append(this.cardHolder);
  }

  renderItem(element: CardModelItem, mode: string): void {
    if (mode === 'train') {
      this.renderFrontSide(element, mode);
      this.cardFront.append(this.image, this.header.element);
      this.cardHolder.append(this.cardFront, this.cardBack);
      this.element.append(this.cardHolder);

      this.image.onclick = () => {
        this.audio.src = `${element.audioSrc}`;
        this.audio.currentTime = 0;
        this.audio.play();
      };
    }

    if (mode === 'play') {
      this.renderPlayCardMode(element, mode);
      this.cardHolder.classList.add('column');
      this.cardHolder.append(this.image, this.cardButton.element);
      this.element.append(this.cardHolder);

      this.cardButton.element.onclick = () => {
        this.audio.src = `${element.audioSrc}`;
        this.audio.currentTime = 0;
        this.audio.play();
      };
    }
  }

  renderFrontSide(element: CardModelItem, mode: string): void {
    this.image.src = `${element.image}`;
    this.header.element.innerHTML = `${element.word}`;

    this.cardButton.removeClass('card__button');
    this.cardButton.addClass('card__button_flip');
    this.cardButton.element.innerHTML = '🔄';
    this.cardButton.changeClassMode(mode);

    this.cardButton.element.onclick = () => {
      this.addClass(FLIP_CLASS);
      this.renderBackSide(element);
      setTimeout(() => {
        this.removeClass(FLIP_CLASS);
      }, TIME * 1000);
    };
    this.cardFront.append(this.header.element, this.image, this.cardButton.element);
  }

  renderBackSide(element: CardModelItem): void {
    this.cardBack.innerHTML = '';
    const img = document.createElement('img');
    img.src = `${element.image}`;
    img.classList.add('card__image');
    const header = document.createElement('h3');
    header.innerHTML = `${element.translation}`;
    this.cardBack.append(img, header);
  }

  renderPlayCardMode(element: CardModelItem, mode: string): void {
    this.image.src = `${element.image}`;
    this.image.classList.add('card__image');
    this.cardButton.element.innerHTML = 'Repeat';
    this.cardButton.removeClass('card__button');
    this.cardButton.addClass('card__button_repeat');
    this.cardButton.changeClassMode(mode);
  }
}
