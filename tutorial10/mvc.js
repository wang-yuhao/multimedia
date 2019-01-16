class Model {
    constructor() {
        this.c = 0;
    }
    notify() {
        this.observer(this);
    }
    get count() {
        return this.c;
    }
    inc() {
        this.c++;
        this.notify();
    }
    dec() {
        this.c--;
        this.notify();
    }
}
class View {
    constructor(initalModel) {
        this.output = document.getElementById('output');
        document.getElementById('incBtn').addEventListener('click', () => {
            window.dispatchEvent(new Event('increment counter'));
        });
        document.getElementById('decBtn').addEventListener('click', () => {
            window.dispatchEvent(new Event('decrement counter'));
        });
    }
    update(model) {
        this.output.innerText = model.count.toString(10);
    }
}
class Controller {
    constructor() {
        const model = new Model();
        const view = new View(model);
        model.observer = (m) => view.update(model);
        window.addEventListener("increment counter", () => model.inc());
        window.addEventListener("decrement counter", () => model.dec());
    }
}
