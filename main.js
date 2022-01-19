// ES6 

/*  Arrow func */
const sum = (a, b) => a+b
console.log(sum)

/* Default parameters */
function print(a=5){
    console.log(a)
}

print() // 5
print(22) // 22

/* let scope */
let a = 3
if(true){
    let a=5
    console.log(a) // 5
}
console.log(a) // 3

/* const */
//const a = 5
//a=44   

/* template strings */
const name = 'isa'
const message = `Merhaba ${name}`

console.log(message)


/*  strings includes */
console.log('apple'.includes('pl')) // true
console.log('apple'.includes('tt')) // false

/* String startWith() */
console.log('apple'.startsWith('ap'))   // true
console.log('apple'.startsWith('bb'))   // false

/* String repeat */
console.log('ab'.repeat(3)) // ababab

/* Destructing array */
let [a, b] = [3, 7]
console.log(a)  // 3
console.log(b)  // 7

/* Destructing object */
let obj = {
    a = 55,
    b = 22
};

let {a,b} = obj
console.log(a) // 55
console.log(b)  // 22

/* Object property assignment */
const a = 2
const b = 5
const obj = {a,b}
console.log(obj)
// Before es6:
// obj = { a: a, b: b }

/* Object func assignment */
const obj = {
    a =5,
    b(){
        console.log('b')
    }
}
obj.b() //b

/* Spread operator */
const a =  [1,2]
const b = [3,4]

const c =[...a, ...b]
console.log(c) // 1,2,3,4


/* Object assign */
const obj1 = {a: 1}
const obj2 = {b: 2}

const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3) // {a:1, b:2}

/* Object entries */
const obj = {
    firstName: 'isa',
    lastName: 'kulaksiz',
    age: 25,
    country: 'Turkey'
};

const entries = Object.entries(obj)
console.log(entries)
/* 
    [
     ['firstName', 'isa'], 
     ['lastName', 'kulaksiz'], 
     ['age', 25], 
     ['country', 'Turkey']
   ];
*/

/* Spread operator */
const a = {
    firstName: 'isa',
    lastName: 'kulaksiz'
};
const b = {
    ...a,
    lastName: 'blabla',
    canSign: true
};

console.log(a)  // {firstName: "isa", lastName: "kulaksiz"}
console.log(b)  // {firstName: "isa", lastName: "blabla", canSing: true}


/* Destructuring nested obj */
const Person = {
    name: 'leonardo',
    age: 40,
    sex: 'male',
    materialStatus: 'always single',
    address: {
        country: 'USA',
        state: 'California',
        city: 'LA',
        pinCode: 25500
    },
};

const { address : { state, pinCode }, name } = Person;

console.log(name, state, pinCode)   // leonardo California 25500
console.log(city) // reference err


/* Exponent operator */
const byte = 2**8
// Math.pow(2,8)

/* Promises with finally */
promise
    .then((result) => { ... })
    .catch((err) => { ... })
    .finally(() => {})
