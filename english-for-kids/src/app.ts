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
    const response = await fetch('./cards.json');
    const data = response.json();
    this.state = await data;
    this.header = new Header(this.element, this.state, this.mode);
    this.header.element.onchange = (event) => {
      // @ts-ignore
      const targetId = event.target.id;
      if (targetId === 'switcher') {
        // @ts-ignore
        if (event.target.checked) {
          this.mode = MODE.train;
          this.header?.setMode(this.mode);
          this.header?.changeSwitcher();
        } else {
          this.mode = MODE.play;
          this.header?.setMode(this.mode);
          this.header?.changeSwitcher();
        }
      }
      this.start(this.state, this.mode);
    };

    return data;
  }

  async start(state: [] | CardsModel[], mode: string): Promise<void> {
    this.mainContainer = new MainContainer(this.element, state, mode);
  }
}
