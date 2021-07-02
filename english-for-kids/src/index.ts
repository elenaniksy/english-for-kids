import './style.scss';
import { App } from './app';
import { Router } from './router/router';

const CATEGORIES = ['action', 'animals', 'colors', 'clothiers', 'emotions', 'fruits', 'transport', 'vegetables'];

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('Application root element not found');
  const application = new App(document.body);

  const router = new Router({
    mode: 'hash',
    root: '/',
  });

  CATEGORIES.forEach((category) => {
    router.add(`#${category}`, () => {
      application.renderCards(category);
    });
  });
};
