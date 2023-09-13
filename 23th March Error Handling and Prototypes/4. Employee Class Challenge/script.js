class employee {
    constructor (name, position, salary) {
          this.name = name;
          this.position = position;
          this.salary =   salary;
    }

    getsalary() {
        return this.salary;
    }
}

let details = new employee("Rishabh", "Accountant", 20000 );

console.log(details.getsalary());