class Queue {
    private count: number = null;
    constructor(private amountPlayers: number) {}
    getplayerNumber():number {
        if (this.count === null) {
            this.count = 0;
        } else {
            this.count++;
            if (this.count >= this.amountPlayers) this.count = 0;
        }
        return this.count;
    }
}
// класс точек
class Dot {

}
// класс для взаимодействия с DOM элементами
class HTML {
    constructor() {}
    createField(anchor: HTMLElement, colsNum:number, rowsNum:number):HTMLElement {
        const table:HTMLElement = document.createElement('table');
        for (let i = 0; i < rowsNum; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < colsNum; j++) {
                let td = document.createElement('td');
                tr.append(td);
            }
            table.append(tr);
        }
        anchor.append(table);
        return table;
    }
    createDot():object { // возвращает DOM node точки
        return new Dot;
    }
}

class Field {
    private DOManchor: HTMLElement; // якорь для таблицы
    private html: HTML = new HTML; // объект для работы с DOM
    public field: HTMLElement; // таблица (игровое поле)
    private queue: Queue = new Queue(2);
    constructor(anchor: string | HTMLElement, private colsNum:number, private rowsNum:number ) {
        this.DOManchor = typeof anchor === 'string' ? 
        document.querySelector(`.${anchor}`) 
        : anchor;
        this.render(); // отрисовка таблицы
        this.handle(); // навешываем обработчик на таблицу
    }
    private render():void {
        this.field = this.html.createField(this.DOManchor, this.colsNum, this.rowsNum);
    }
    private handle():void {
        this.field.addEventListener('click', (e) => {
            console.log(this.queue.getplayerNumber())
        })
    }
}

let filed = new Field('game', 15, 15);

