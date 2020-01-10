
const ELEMENT = document.querySelector('#page');

export class BaseRouter {
    constructor (list) {
        this.list = list;
    }
    render (state) {
        let page = this.list.find((page) => page.path === state);
        page = page ? page : this.list.find(page => page.path === '*');
        ELEMENT.innerText = page.component;
    }
}