import { ROUTELIST } from './src/routerList';
import { WebRouter } from './src/index';

const webRouter = new WebRouter({
  mode: 'hash',
  routeList: ROUTELIST
});

setTimeout(() => {
    webRouter.push('#/history');
}, 5000)