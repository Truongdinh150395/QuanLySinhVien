//let sinhvien = new Student();
let studentManager = new StudentManager('trung');
const STUDENT = 'student';
studentManager.data = loadData();
studentManager.int();
console.log(studentManager.data);
display(studentManager.getHtml1())

function display(table) {
    document.getElementById('list-book').innerHTML = table;
    saveData();
}

function addStudent() {
    let id = document.getElementById('add-id').value;
    let name = document.getElementById('add-name').value;
    let lop = document.getElementById('add-lop').value;
    let diem = document.getElementById('add-diem').value;
    let img = document.getElementById('add-img').value;
    if (name == "" || id == "" || lop == "" || diem == ""  || img == "") {
        alert('Mời bạn nhập đầy đủ thông tin');
    } else {
        let student = new Student(id, name, lop, diem);
        student.img = img;
        studentManager.addStudent(student);
        display(studentManager.getHtml());
        document.getElementById('add-form').reset();
    }
}

function saveData() {
    localStorage.setItem(STUDENT, JSON.stringify(studentManager.student));
}

function loadData() {
    return localStorage.hasOwnProperty(STUDENT) ? JSON.parse(localStorage.getItem(STUDENT)) : [];
}