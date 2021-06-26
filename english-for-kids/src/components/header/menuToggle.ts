import { BaseComponent } from '../BaseComponent';
import { NavigationList } from './navigationList';
import { CardsModel } from '../shared/cardsModel';

export class MenuToggle extends BaseComponent {
  private readonly input: HTMLInputElement;

  private navigationList: NavigationList;

  private readonly label: HTMLLabelElement;

  constructor(private parentNode: HTMLElement, state: [] | CardsModel[], mode: string) {
    super(parentNode, 'div', ['menu-toggle']);
    this.input = document.createElement('input');
    this.input.id = 'menu__toggle';
    this.input.type = 'checkbox';
    this.label = document.createElement('label');
    this.label.classList.add('menu__btn');
    this.label.htmlFor = 'menu__toggle';
    this.label.innerHTML = `<span></span>`;
    this.render([this.input, this.label]);
    this.navigationList = new NavigationList(this.element, state, mode);
  }

  render(elements: Node[] = []): void {
    this.element.append(...elements);
  }

  changeColor(mode: string) {
    if (mode === 'train') {
      this.navigationList.removeClass('red');
      this.navigationList.addClass('green');
    }

    if (mode === 'play') {
      this.navigationList.removeClass('green');
      this.navigationList.addClass('red');
    }
  }
}
