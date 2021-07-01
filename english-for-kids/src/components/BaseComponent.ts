export class BaseComponent {
  element: HTMLElement;

  constructor(
    parentNode: HTMLElement | null = null,
    tag: keyof HTMLElementTagNameMap = 'div',
    styles: string[] = [],
    content = '',
  ) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    this.element.innerHTML = `${content}`;

    if (parentNode) {
      parentNode.append(this.element);
    }
  }

  destroy(): void {
    this.element.remove();
  }

  addClass(classStyle: string): void {
    this.element.classList.add(classStyle);
  }

  removeClass(classStyle: string): void {
    this.element.classList.remove(classStyle);
  }

  changeClassMode(mode: string): void {
    if (mode === 'train') {
      this.removeClass('red');
      this.addClass('green');
    }

    if (mode === 'play') {
      this.removeClass('green');
      this.addClass('red');
    }
  }
}
