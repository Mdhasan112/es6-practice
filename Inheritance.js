class parent{
    constructor(){
        this.fatherName= "justin beiber"
    }
}
class child extends parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getfullName() {
        return this.name + this.fatherName;
    }
}

const childName = new child("Anrol");
const childName2 = new child("tom");

console.log(childName.getfullName());
console.log(childName2.getfullName());