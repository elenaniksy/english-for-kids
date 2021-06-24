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
}
