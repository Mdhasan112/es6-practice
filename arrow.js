// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);

// const doubleIt = function(num) {
//     return num * 2;
// }
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(10, 5);
const result2 = give5();
const result3 = doMath(10, 5)

console.log(result3);