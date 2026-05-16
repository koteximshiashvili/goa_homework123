function Classroom(students){
    this.students = students;
    this.countStudents = function(){
        console.log(this.students.length);
    }
}
const class1 = new Classroom(["kote", "sandro", "giorgi"]);
class1.countStudents();