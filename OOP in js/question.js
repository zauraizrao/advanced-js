class Employee{

constructor(salary,Name){
    this.salary=salary
    this.Name=Name
}

display(){
console.log((`Annual Salary of ${this.Name} is `)+(this.salary)*12);
}
}
class Manager extends Employee{
display(){
    super.display()
    console.log("Include Bonuses");
}
}


let gM = new Manager(150000,"Rohaan")
let manager = new Manager (350000,"Abdul Rehman")
gM.display()
manager.display()