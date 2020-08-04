class Student {
    constructor(id, name, date, lop, diem) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.lop = lop;
        this.diem = diem;
        this.img = "";

    }
    get name() {
        return this.name;
    }
    set name(value) {
        this.name = value;
    }
    get id() {
        return this.id;
    }
    set id(value) {
        this.id = value;
    }
    get date() {
        return this.date;
    }
    set date(value) {
        this.name = value;
    }
    get lop() {
        return this.lop;
    }
    set lop(value) {
        this.lop = value;
    }
    get diem() {
        return this.diem;
    }
    set diem(value) {
        this.diem = value;
    }
    get img() {
        return this.img;
    }
    set img(value) {
        this.img = value;
    }
    edit(id, name, date, lop, diem, img) {
        this.name = name;
        this.id = id;
        this.date = date;
        this.lop = lop;
        this.diem = diem;
        this.img = img;
    }
    getHtml() {
    let html =`<tr> 
                <td>${this.id}</td>
                <td>${this.name}</td>
                <td>${this.date}</td>
                <td>${this.lop}</td>
                <td>${this.diem}</td>
               <td><img src="${this.img}"></td>
                
                </tr>>`
    return html;
    }
}