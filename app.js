const thisIsConstant = 1;
let thisIsVariable = 1;
var thisIsOldVariable = 1; /* Discouraged to use */

console.log('app.js Debugging');

const someObject = {
    a : 1,
    b : 'a',
    c : true,
}

function someFun(arg) {
    console.log(arg)
}

const a_1 = document.getElementsByTagName("h1");
console.dir(a_1);

a_1.innerText = "Hey!"