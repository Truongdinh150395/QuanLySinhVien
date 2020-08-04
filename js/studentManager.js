class StudentManager{
    constructor(name) {
        this.name = name;
        this.student = [];
        this.data = [];
    }
    int(){
        for (let i = 0; i < this.data.length; i++) {
            let student = new Student(this.data[i].id,this.data[i].name,this.data[i].date,this.data[i].lop,this.data[i].diem);
            student.img = this.data[i].img;
            this.addStudent(student);

        }
    }
    addStudent(student){
        this.student.push(student)

    }
    getHtml1() {
        console.log(this.student)
        let table = `<table id="list-student" cellspacing='0'>
                    <tr>
                        <th>id</th>
                        <th>Tên</th>
                        <th>Ngày Tháng</th>
                        <th>Lớp</th>
                        <th>Điểm</th>
                        <th>Hình ảnh</th>
                    </tr>`;
        for (let i = 0; i < this.student.length; i++) {
            table += `<tr>${this.student[i].getHtml()}${this.getButtons(i)}</tr>`;
        }
        table += '</table>';
        return table;
    }
    getButtons(index) {
        let buttons = `<td><button type="button" onclick="delStudent(${index})">Delete</button</td>
                        <td><button type="button" onclick="editStudent(${index})">Edit</button</td>`;
        // td><button type="button" onclick="showInfo(${index})">Show Info</button></td>`;
        return buttons;
    }
    editStudent(){

    }
    delStudent(index){
        this.student.slice(index,1);
    }
    // getAllSinhVien(){
    //     let html = "";
    //     for (let i = 0; i < this.sinhvien.length; i++) {
    //         html += this.sinhvien[i].getHtml();
    //     }
    //     return html;
    // }
}