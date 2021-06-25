import { BaseComponent } from '../BaseComponent';

export class Switcher extends BaseComponent {
  private readonly input: HTMLInputElement;

  private readonly label: HTMLLabelElement;

  private readonly span: HTMLSpanElement;

  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['switch-button']);
    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.input.classList.add('switch-button-checkbox');
    this.label = document.createElement('label');
    this.label.classList.add('switch-button-label');
    this.label.htmlFor = '';
    this.span = document.createElement('span');
    this.span.classList.add('switch-button-label-span');
    this.span.innerHTML = 'Train';
    this.label.append(this.span);
    this.element.append(this.input, this.label);
  }
}
