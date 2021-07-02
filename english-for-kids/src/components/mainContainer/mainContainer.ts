import { BaseComponent } from '../BaseComponent';
import { CardsModel } from '../shared/cardsModel';
import { CardField } from './cardField';

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
    this.element.onclick = (event) => {
      this.handlerClick(event);
    };
  }

  renderStartCategory(): void {
    this.cardField.clear();
    this.cardField.addCardsCategory(this.state, this.mode);
  }

  changeMode(mode: string): void {
    this.mode = mode;
    this.renderStartCategory();
  }

  handlerClick(event: any): void {
    const eventClass = event.target.className.split(' ')[0];

    if (eventClass === 'card__button') {
      const elementId = event.target.id;
      this.cardField.clear();
      this.cardField.addCardsItems(this.state, this.mode, elementId);
    }
  }

  renderCardsByCategory(category: string): void {
    this.state.forEach((cat) =>
      cat.category === category ? this.cardField.addCardsItems(this.state, this.mode, category) : null,
    );
  }
}
