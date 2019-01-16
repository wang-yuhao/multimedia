class Model{
    private c = 0;

    public observer:(_:Model)=>void;
    private notify(){
        this.observer(this);
    }

    public get count (): number{
        return this.c;
    }

    public inc (): void{
        this.c++;
        this.notify();
    }
    public dec (): void{
        this.c--;
        this.notify();
    }
}

class View{
    private output:HTMLSpanElement;
    constructor(initalModel:Model){
        this.output = document.getElementById('output');

        document.getElementById('incBtn').addEventListener('click',() =>{
            window.dispatchEvent(new Event('increment counter'))
        });

        document.getElementById('decBtn').addEventListener('click',() =>{
            window.dispatchEvent(new Event('decrement counter'))
        });
    }

    update (model:Model){
        this.output.innerText = model.count.toString(10);
    }
}


class Controller{
    constructor(){
        const model = new Model();
        const view = new View(model);
        model.observer = (m) => view.update(model);
        window.addEventListener("increment counter",()=>model.inc());
        window.addEventListener("decrement counter",()=>model.dec());
    }
}