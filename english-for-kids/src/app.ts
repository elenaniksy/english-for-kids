import { BaseComponent } from './components/BaseComponent';
import { Header } from './components/header/header';
import { CardsModel } from './components/shared/cardsModel';
import { MainContainer } from './components/mainContainer/mainContainer';

const MODE = {
  train: 'train',
  play: 'play',
};

export class App extends BaseComponent {
  private header: null | Header;

  private state: [] | CardsModel[];

  private mainContainer: null | MainContainer;

  private mode: string;

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['app__container']);
    this.mode = MODE.train;
    this.header = null;
    this.mainContainer = null;
    this.state = [];
  }

  async init(): Promise<void> {
    const response = await fetch('./cards.json');
    const data = response.json();
    this.state = await data;
    this.header = new Header(this.element, this.state, this.mode);
    this.start(this.state);
    return data;
  }

  start(state: [] | CardsModel[]): void {
    this.mainContainer = new MainContainer(this.element, state);
  }
}
