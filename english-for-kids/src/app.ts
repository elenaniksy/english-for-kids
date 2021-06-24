import { BaseComponent } from './components/BaseComponent';

export class App extends BaseComponent {
  constructor(private parentNode: HTMLElement) {
    super(parentNode, 'div', ['app__container']);
  }
}
