                //   0            1            2         3
const students = ["Antonio", "Alessandro", "Youssef", "Joshua"];

console.log('students', students, typeof students);
console.log('students[0]', students[0], typeof students[0]);
console.log('students[1]', students[1], typeof students[1]);
console.log('students[2]', students[2], typeof students[2]);
console.log('students[3]', students[3], typeof students[3]);

for (let i = 0; i < 4; i++) {
    console.log('students[i]', students[i], typeof students[i]);
}

students.push("Claudio");   // Questo verrà messo in coda all'array, in posizione 4

/* 

    SEMPRE VERO:
    Se ho un array con N elementi all'interno, avrò a disposizione gli indici da 0 a N - 1

*/

// for (let i = 0; i < 5; i++) {
//     console.log('students[i]', students[i], typeof students[i]);
// }

students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");
students.push("Claudio");

/* 
    Se la lunghezza del mio array è 5, farà: 0, 1, 2, 3, 4
    Se la lunghezza del mio array è 27, farà: 0, 1, 2, 3, 4, 5...25, 26


            0     ->      n-1               dove n è proprio la lunghezza dell'array
*/
for (let i = 0; i < students.length; i++) {
    console.log('students[i]', students[i], typeof students[i]);
}

const multiDimensional = [
    'Alessio',
    78,
    true,
    [
        'PHP',
        'JS',
        'PYTHON'
    ]
];
console.log('multiDimensional', multiDimensional, typeof multiDimensional);
console.log(multiDimensional[0], multiDimensional[1]);
console.log('multiDimensional[3][1]', multiDimensional[3][1], typeof multiDimensional[3][1]);

/* 

    ----------------------------------------------------------------------------------------------------------

*/

const people = [
    'Gino',
    'Pino',
    'Lino'
];

// const index = parseInt(prompt('Ci sono 3 persone nella stanza, di quale vuoi sapere il nome?'));

// if (isNaN(index) || index >= people.length || index < 0) {
//     alert('Input non valido!');
// }
// else {
//     alert('Hai scelto: ' + people[index]);
// }

/* 

    ----------------------------------------------------------------------------------------------------------

*/

const myArr = [];

console.log('myArr', myArr, typeof myArr);

myArr.push(34);

console.log('myArr', myArr, typeof myArr);

/* 

    ----------------------------------------------------------------------------------------------------------

*/

const title = document.querySelector('h1');

console.log('title.classList', title.classList);

for (let i = 0; i < title.classList.length; i++) {
    console.log(title.classList[i]);
}

/* 

    ----------------------------------------------------------------------------------------------------------

*/






