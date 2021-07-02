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
    this.init();
  }

  async init(): Promise<void> {
    this.element.innerHTML = '';
    const response = await fetch('./cards.json');
    const data = response.json();
    this.state = await data;
    this.header = new Header(this.element, this.state, this.mode);
    this.header.element.onchange = (event: any) => {
      const targetId = event.target.id;
      if (targetId === 'switcher') {
        if (event.target.checked) {
          this.mode = MODE.train;
          this.header?.setMode(this.mode);
          this.header?.changeSwitcher();
          this.mainContainer?.changeMode(this.mode);
        } else {
          this.mode = MODE.play;
          this.header?.setMode(this.mode);
          this.header?.changeSwitcher();
          this.mainContainer?.changeMode(this.mode);
        }
      }
    };
    await this.renderMainContainer(this.element, this.state, this.mode);
    return data;
  }

  renderMainContainer(element: HTMLElement, state: CardsModel[], mode: string) {
    this.mainContainer = new MainContainer(element, state, mode);
  }

  renderCards(category: string): void {
    this.mainContainer?.renderCardsByCategory(category);
  }
}
