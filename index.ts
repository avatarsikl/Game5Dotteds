class Field {
    public DOManchor: HTMLElement;
    constructor(anchor: string | HTMLElement) {
        this.DOManchor = typeof anchor === 'string' ? document.querySelector(anchor) : anchor;
    }
}

let filed = new Field('field')