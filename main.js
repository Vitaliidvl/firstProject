"use strict";

// while (number <= 25) {
//   console.log(number);
//   number++;
// }

// do {
//     console.log(number);
//     number++;

// }
// while (number <= 25);
// let number = 20;
// for ( let i = 1; i <= 9; i++) {
//     if ( i === 6){
//     // break;
//     continue;
// }
//     console.log(i);

// }

// for(let i = 96; i <= 100; i++) {

//         console.log(i + ' Маша');

// }//

// let i = 5;
// while ( i < 60 ) {
//    console.log(i + ' deal');
//    i++;
// }

// let i = 5;
// do {console.log(i +' shopping whisky');
// i++;
// } while (i < 88);

// const str = 'bvvb';
// console.log(str.length);

// const arr = [1, 3, 54, 2, 44, 565, 123];
//   arr.sort(compareNum);

//   function compareNum (a, b) {
//       return a - b;
//   }
// console.log(arr);

let obj = {
  ivan: 5,
  stepan: "alaska",
  petro: 3,
  misha: {
    greece: 1,
    panama: 2,
  },
};
let obj2 = Object.assign({}, obj);
console.log(obj);
console.log(obj2);
