"use strict";

// // const options = {
//     name: 'test',
//     width: 1024,
//     heiht: 1024,
//     colors:{
//         border: 'black',
//         bg: 'red'
//     }
// };

// // for (let key in options) {
//     // if (typeof(options[key]) === 'object') {
//         // for (let i in options[key]) {
//             // console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
//         // }
//     // } else {
//         console.log (`Свойство ${key} имеет значение ${options[key]}`);
//     // }
// }    

const prime = {
    name: 'Alex',
    age: 31,
    work: 'no_work',
    family: {
        wife: 'Svetlana',
        child: 2,
        father: 'Vladimir',
        mother: 'Lyubov',
    }
};
for (let key in prime) {
    if(typeof(prime[key]) === 'object') {
        for (let i in prime[key]) {
            console.log(`Свойство ${i} принимает значение ${prime[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} принимает значение ${prime[key]}`);
    }  
}
console.log(Object.keys(prime).length);

const {wife, child, father, mother} = prime.family;
console.log(wife, mother);