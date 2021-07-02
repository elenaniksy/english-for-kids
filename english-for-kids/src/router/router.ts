type RouterConfig = {
  mode: string;
  root: string;
};

type Routes = {
  path: string;
  handler: () => void;
};

export class Router {
  routes: Routes[] = [];

  mode: string | null = null;

  root = '/';

  constructor(options: RouterConfig) {
    this.mode = 'hash';
    if (options.mode) this.mode = options.mode;
    if (options.root) this.root = options.root;

    window.onpopstate = () => {
      this.navigate();
    };
  }

  add(path: string, handler: () => void): this {
    this.routes.push({ path, handler });
    return this;
  }

  navigate(): this {
    const route = this.routes.find((routeElement) => routeElement.path === window.location.hash);
    if (!route) throw new Error('error route: there is no such route');
    route.handler();
    return this;
  }
}
