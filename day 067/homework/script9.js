function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    
        this.hasPassed = function() {
            let sum = 0;
            let count = 0;
    
            for (let i = 0; i < marks.length; i++) {
                sum += marks[i];
                count++;
            }
    
            let result = sum / count;
    
            return result >= 50;
        };
    }
    
const student1 = new Student('kote', [60, 70, 80]);
console.log(student1.hasPassed());
    
const student2 = new Student('gio', [40, 30, 20]);
console.log(student2.hasPassed());