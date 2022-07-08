const person = {name: "hasan khan", age: 25, job: "freelancher", gfName: "sakira", phone: "01797999949"}

const {gfName, phone, age,} = person;

// const gfName = person.gfName;
// const age = person.age;

console.log(gfName, age, phone);
console.log(gfName);
console.log(gfName);

const friendsName = ["nayem", "rofiq", "raju", "basar"]

const [firstFriend, second, ...restFriend] = friendsName;
console.log(firstFriend,  second, restFriend);