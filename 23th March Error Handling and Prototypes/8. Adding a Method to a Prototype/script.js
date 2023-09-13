function Student(name) {
    this.name = name;
}

Student.prototype.printdetails = function () {
     return `Hello, the student is ${this.name}.`;
   }



let student = new Student("Khushi");
console.log(student.printdetails());