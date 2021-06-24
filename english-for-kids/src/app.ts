import { BaseComponent } from './components/BaseComponent';
import { Header } from './components/header/header';
import { CardsModel } from './components/shared/cardsModel';

export class App extends BaseComponent {
  private header: null | Header;

  private state: [] | CardsModel[];

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['app__container']);
    this.header = null;
    this.state = [];
    this.init();
  }

  async init(): Promise<void> {
    const response = await fetch('./cards.json');
    const data = response.json();
    this.state = await data;
    this.header = new Header(this.element, this.state);
    return data;
  }
}
