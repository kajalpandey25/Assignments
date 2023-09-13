class mycar {

    constructor() {
        this.company = "Mahindra";
        this.model = "Mahindra Five-door Thar";
        this.year = 2023;
    }

   getdecription() {
      return `This is a ${this.year} ${this.company} ${this.model}.`

   }
}


let detail = new mycar();
console.log(detail.getdecription());