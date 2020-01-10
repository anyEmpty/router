import { HashRouter } from './hashRoute';
import { HistoryRouter } from './historyRoute';
const MODE = "history";

export class WebRouter {
    constructor({ mode = 'hash', routeList }) {
        this.router = mode === 'hash' ? new HashRouter(routeList) : new HistoryRouter(routeList);
    }
    push(path) {
      this.router.push(path);
    }
    replace(path) {
      this.router.replace(path);
    }
    go(num) {
      this.router.go(num);
    }
} 