

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
}

class Field {
    private DOManchor: HTMLElement; // якорь для таблицы
    private html: any = new HTML; // объект для работы с DOM
    public field: HTMLElement; // таблица (игровое поле)
    constructor(anchor: string | HTMLElement, private colsNum:number, private rowsNum:number ) {
        this.DOManchor = typeof anchor === 'string' ? 
        document.querySelector(`.${anchor}`) 
        : anchor;
        this.render(); //отрисовка таблицы
    }
    private render():void {
        this.field = this.html.createField(this.DOManchor, this.colsNum, this.rowsNum);
    }
}

let filed = new Field('game', 15, 15);
console.log(filed.field);

