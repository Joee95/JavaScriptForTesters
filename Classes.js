class Student {

    constructor(sid, sname, grade) {
        this.sid = sid;
        this.sname = sname;
        this.grade = grade;
    }

    /* setDetails(sid, sname, grade) {
        this.sid = sid;
        this.sname = sname;
        this.grade = grade;
    } */

    display() {
        console.log(this.sid, this.sname, this.grade);
    }
}

let stu1 = new Student(102, "Yousef", "A");
let stu2 = new Student(103, "Omar", "B");
let stu3 = new Student(104, "Hossam", "C");
stu1.display();
stu2.display();
stu3.display();

/* stu.setDetails(101, "john", "A");
stu.display(); */