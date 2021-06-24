import { BaseComponent } from '../BaseComponent';

export class MenuToggle extends BaseComponent {
  private readonly input: HTMLInputElement;

  private readonly spanFirst: HTMLSpanElement;

  private readonly spanSecond: HTMLSpanElement;

  private readonly spanThird: HTMLSpanElement;

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['menu-toggle']);
    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.spanFirst = document.createElement('span');
    this.spanSecond = document.createElement('span');
    this.spanThird = document.createElement('span');
    this.render([this.input, this.spanFirst, this.spanSecond, this.spanThird]);
  }

  render(elements: Node[] = []): void {
    this.element.append(...elements);
  }
}
