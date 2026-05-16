class Student {
    constructor(score) {
        this.score = score;
    }

    get grade() {
        if (this._score >= 90) {
            return "A";
        } else if (this._score >= 80) {
            return "B";
        } else if (this._score >= 70) {
            return "C";
        } else if (this._score >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    set score(score) {
        if (score >= 0 && score <= 100) {
            this._score = score;
        } else {
            console.log("wrong score");
        }
    }
}


const student = new Student(85);
console.log(student.grade);
