class Complex{

constructor(real,img){
this.nasli = real;
this.iota=img;
}
add(num){
// this.iota=this.iota+num.iota
// this.nasli=this.nasli+num.nasli
console.log(num.iota);
// console.log(`${this.nasli} + ${this.iota}i`);
}
}

let eq1 = new Complex(5,4) 
let eq2 = new Complex(6,3)
eq1.add(eq2)

