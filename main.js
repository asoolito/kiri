// let box = [] 

// let numbers = [1,8,21,39,41,99,100,44,39,63,36,43,64];
// for (let index = 0; index < numbers.length;index++) {
//     if (numbers[index] % 2 == 0) {
//         box.push(numbers[index] );
//     }else {
//         console.log(numbers)
//     }
// }   
// console.log(box)

// let box = [];
// let numbers = [1, 8, 21, 39, 41, 99, 100, 44, 39, 63, 36, 43, 64];
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] % 2 === 0) {
//         box.push(numbers[index]);
//     }
// }
// console.log(box);


let box = [];
let numbers = [1, 8, 21, 39, 41, 99, 100, 44, 39, 63, 36, 43, 64];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        box.push(numbers[index]);
    } else {
        console.log(numbers[index]);
    }
}
console.log(box);
