class busRussia {

    constructor(name, lname) {
        this.name = name
        this.lastname = lname
    }
    RegisteryForm() {
        alert(`${this.name} your registration is complete ${this.lastname}`)
    }
    cancelForm() {
        alert(`${this.name} your registration is canceled ${this.lastname}`)
    }


}


let obj = new busRussia("Rohaan", "Shaikh");
obj.RegisteryForm()
obj.cancelForm();

