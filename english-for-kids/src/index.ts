import './style.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('Application root element not found');
  const application = new App(document.body);
};
