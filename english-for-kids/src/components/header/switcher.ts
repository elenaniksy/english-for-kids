import { BaseComponent } from '../BaseComponent';

export class Switcher extends BaseComponent {
  private readonly input: HTMLInputElement;

  private readonly label: HTMLLabelElement;

  private readonly span: HTMLSpanElement;

  private mode: string;

  constructor(private parentNode: HTMLElement, mode: string) {
    super(parentNode, 'div', ['switch-button']);
    this.mode = mode;
    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.input.id = 'switcher';
    this.input.classList.add('switch-button-checkbox');
    this.label = document.createElement('label');
    this.label.classList.add('switch-button-label');
    this.label.htmlFor = '';
    this.span = document.createElement('span');
    this.span.classList.add('switch-button-label-span');
    this.span.innerHTML = 'Train';
    this.label.append(this.span);
    this.render(this.mode);
  }

  render(mode: string): void {
    if (mode === 'train') {
      this.input.checked = true;
      this.removeClass('red');
      this.addClass('green');
    }

    if (mode === 'play') {
      this.input.checked = false;
      this.removeClass('green');
      this.addClass('red');
    }
    this.element.append(this.input, this.label);
  }
}
