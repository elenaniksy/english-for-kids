import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';
import { Card } from '../card/card';
import { CardModelItem } from '../shared/cardModelItem';

export class CardField extends BaseComponent {
  private cards: CardsModel[] = [];

  private buttonStart: BaseComponent;

  private errors: number;

  private answers: number;

  private cardsItems: CardModelItem[] | undefined;

  private activeItem: CardModelItem | null;

  private readonly cardsHtmlElements: HTMLElement[] = [];

  private audio: HTMLAudioElement;

  private index: number;

  private score: BaseComponent;

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['cards-field']);
    this.buttonStart = new BaseComponent(this.element, 'button', ['button__start'], 'Start game');
    this.audio = new Audio();
    this.audio.currentTime = 0;
    this.activeItem = null;
    this.index = 0;
    this.errors = 0;
    this.answers = 0;
    this.cardsHtmlElements = [];
    this.score = new BaseComponent(this.element, 'div', ['score']);
    this.buttonStart.element.onclick = () => {
      this.newGame();
    };
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
        this.cardsItems = card.items;
        card.items.forEach((item) => {
          const cardElement = new Card(this.element).renderItem(item, mode);
          this.cardsHtmlElements.push(cardElement);
        });
      }
    });

    if (mode === 'play') {
      this.element.append(this.buttonStart.element);
      this.buttonStart.changeClassMode(mode);
    }
  }

  newGame(): void {
    this.buttonStart.destroy();
    this.element.append(this.score.element);
    const button = new BaseComponent(this.element, 'button', ['button__start', 'red'], 'Repeat');
    button.element.onclick = () => {
      if (this.activeItem) {
        this.playSound(this.activeItem.audioSrc);
      }
    };
    this.element.append(button.element);
    this.sortPlayItems();
    this.getPlayElement();
  }

  getPlayElement() {
    if (this.cardsItems) {
      if (this.index === this.cardsItems.length - 1) {
        this.renderEndGame();
      }
      this.activeItem = this.cardsItems[this.index];
      this.playSound(this.activeItem.audioSrc);

      this.cardsHtmlElements.forEach((el) => {
        el.onclick = () => {
          this.playCardsHandler(el.id);
        };
      });
    }
  }

  playCardsHandler(eventId: string): void {
    if (!this.activeItem) {
      throw Error(`active item is not defined: ${this.activeItem}`);
    }

    if (eventId === this.activeItem.word) {
      this.answers += 1;
      this.score.element.append('⭐');
      this.index += 1;
      this.getPlayElement();
    } else {
      this.errors += 1;
      this.score.element.append('⭕');
    }
  }

  playSound(src: string): void {
    this.audio.src = src;
    this.audio.play();
  }

  sortPlayItems(): void {
    if (this.cardsItems) {
      this.cardsItems.sort(() => Math.round(Math.random() * 100 - 50));
    }
  }

  renderEndGame(): void {
    this.element.innerHTML = '';
    this.element.style.alignItems = 'center';
    const finalHeader = new BaseComponent(this.element, 'h1', ['header__final']);
    const finalImage = document.createElement('img');
    finalImage.classList.add('img__final');
    finalImage.src = '';
    const restartButton = new BaseComponent(this.element, 'button', ['button__restart'], 'Try again!');
    restartButton.element.onclick = () => {
      this.restartGame();
    };

    if (this.errors === 0) {
      finalHeader.element.innerHTML = '';
      finalHeader.element.innerHTML = `You Win! Answers: ${this.answers}. Errors: ${this.errors}`;
      finalImage.src = './img/win.jpg';
      this.element.append(finalHeader.element, finalImage);
    } else {
      finalHeader.element.innerHTML = '';
      finalHeader.element.innerHTML = `You lose! Answers: ${this.answers}. Errors: ${this.errors}`;
      finalImage.src = './img/lose.jpg';
      this.element.append(finalHeader.element, finalImage);
    }

    this.element.append(restartButton.element);
  }

  restartGame(): void {
    this.element.innerHTML = '';
    this.score.element.innerHTML = '';
    this.errors = 0;
    this.index = 0;
    this.answers = 0;
    this.activeItem = null;
    this.audio.src = '';
    this.addCardsCategory(this.cards, 'play');
  }
}
