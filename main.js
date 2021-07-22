


let A = 0;
let B = 1;

// const myCssHead = `
// background: #ddeeff;
// font-family: Arial, Helvetica, sans-serif;
// font-weight: bold;
// border: 1px solid #aaa;
// padding: 10px 10px 10px 10px;
// `;
// let myCssBoby = `

//     background: #dfd;
//     font-family: cursive;
//     border: 1px solid #aaa;

// `;

// console.log(`%cOperadores AND`,myCssHead);

// console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssBoby);
// console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${A && B}`,myCssBoby);
// console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${!A && !B}`,myCssBoby);
// console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B = ${!A && B}`,myCssBoby);
// console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssBoby);



console.log(`Operadores AND`);
console.log(`1. A:`,!(!A),` (OPERADOR AND) B:`,!B,` A && B =`,!(!A) && !B);
console.log(`2. A:`,A,` (OPERADOR AND) B:`,B,` A && B =`,A && B);
console.log(`3. A:`,!A,` (OPERADOR AND) B:`,!B,` A && B =`,!A && !B);
console.log(`4. A:`,!A,` (OPERADOR AND) B:`,B,` A && B =`,!A && B);
console.log(`A:`,A,`B:`,B,`Datos verdaderos`);




console.log (`operadores OR `);
console.log(`1. A:`,!(!A),` (OPERADOR OR) B:`,!B,` A || B =`,!(!A)|| !B);
console.log(`2. A:`,A,` (OPERADOR OR) B:`,B,` A || B =`,A || B);
console.log(`3. A:`,!A,`(OPERADOR OR) B:`,!B,`A || B = `,!A || ! B);
console.log(`4. A:`,!A,` (OPERADOR OR) B:`,B,` A ||  B =`,!A ||  B);
console.log(`A:`,A,`B:`,B,`Datos verdaderos`);




console.log (`operadores not `);
console.log(`1. A:`,A,` (OPERADOR NOT) `,!A);
console.log(`2. B:`,B,` (OPERADOR NOT) `,!B);


// Operador AND (&&)
let tablaAND = document.querySelector("#myTablaAND");
tablaAND.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) && !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
    <tr>
        <td>${  !A}</td>
        <td>${!B}</td>
        <td>${!A && !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A && B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>




`;
// Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) || !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A || B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${!B}</td>
        <td>${!A || !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A || B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador NOT (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
`;