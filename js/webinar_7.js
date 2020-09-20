// const fnA = function (message, callback) {
//     console.log(message);
//     // console.log(callback);
//     callback(100); 

// };

// const fnB = function (number) {
//     console.log('this is function 2nd');
// };
// fnA('1st message', fnB);


// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// const add = function (x, y) {
//     return x + y;

// };

// const sub = function (x, y) {
//     return x - y;

// };
// doMath(2, 3, add);
// doMath(4, 3, sub);


const buttonRef = document.querySelector('.js-button');

 const handleBtnClick = function () {
console.log('click on the button');
 };
buttonRef.addEventListener('click', handleBtnClick);




// const ongetPositionSuccess = function (position) {
//     console.log('this is the alert for ongetPositionSuccess');
//     console.log(position);
// };
// const ongetPositionError = function (error) {
//     console.log('this is the alert for ongetPositionError');
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     ongetPositionSuccess,
//     ongetPositionError,
// );

// const callback = function () {
//     console.log('in 2 minutes');
// };

// console.log('In code BEFORE timeout');
// setTimeout(callback, 2000);
// console.log('In code AFTER timeout')


const filter = function (array, callback) {
    const filterdArray = [];

    for (const element of array) {
        console.log(element);
        console.log(callback(element));

    }

    return filterdArray;
};
// const callback1 = function (value){
//     return value >= 3;
// };
const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4], callback1);
// console.log(r1);

const r1 = filter([1, 2, 3, 4], value => value >= 3);
console.log(r1);

// const callback2 = function (value){
//     return value <= 4;
// };

// const r2 = filter([9, 8, 7], callback2);
// console.log(r2);

const callback2 = value => value <= 4;

const r2 = filter([9, 8, 7], value => value <= 4);
console.log(r2);
const fruits = [
    {name: 'apples', quantity: 200, isFresh:true},
    {name: 'grapes', quantity: 400, isFresh:false},

];

const gerFruitsWithQuantity = fruit => fruit.quantity >=  220;

const result = filter(fruits, gerFruitsWithQuantity);
console.log(result);


// CLOSURE

// const fnA = function(parameter) {
//     const innerVariable = 'the meaning of fnA function';

//     const innerFunction = function () {
//         console.log('the meaning of fnB function');
//         console.log(innerVariable);

//     };

//     return innerFunction;

// };

// const fnB = fnA();

// fnB();
// console.log(fnB);
// console.log(fnA);


// const makeSheff = function (name) {
//     const makeDish = function (dish){
//         console.log(`${name} cooks ${dish}`);
//     };
//     return makeDish;
// };

// const khris = makeSheff ('Khris');
// khris('tea');
// khris('soup');

// const jack = makeSheff ('Jack');
// jack('coffee');
// jack('salad');



// const floatingPoint = 5.65407543;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed());


// const rounder = function ( places) {
//     return function (number){
//     return Number (number.toFixed(places));
// };
// };
// // console.log(rounder(3,4382, 2));

// const rounder2 = rounder(3);
// const rounder3 = rounder(4);


// console.log(rounder2(6,4382));
// console.log(rounder3 (3,4382));


// const floatingPoint = 5.65407543;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed());

// console.log(Number(floatingPoint.toFixed(4)));


// const rounder1 = floatingPoint.toFixed(4);
// const rounder2 = floatingPoint.toFixed(2);
// console.log(rounder1);
// console.log(rounder2);


// const number1 = 8.6454;
// const number2 = 0.5432;

// console.log(Number(number1.toFixed(2)));
// console.log(Number(number2.toFixed(3)));



// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//  let salary = baseSalary;

// //  const changeBy = function (amount) {
// //      salary +=amount;
// //  };
//  return { 
//      raise(amount) {
//         salary += amount;
//  },
//  lower(amount) {
//     salary -= amount;
// },
// current(amount) {
//     return `salary of ${employeeName} is ${salary}`;
// },
// };
// };
// const salaryManager = salaryManagerFactory('Mango', 5000);
// console.log(salaryManager.current());




// const add = function (a, b, c){
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(add(5, 12, 4));



// const addMe = (a, b, c) => a + b + c;

// console.log(addMe(5, 12, 4));

// // const add = function (a, b, c){
// //     console.log(arguments);
// //     return a + b + c;
// // };

// const addArrow = (...args) =>{
//     console.log(args);
// };

// // const add (a, b, c) => a + b + c;
// console.log(add(5, 12, 4));

// // const addArrow (a, b, c) => a + b + c;
// console.log(addArrow(5, 12, 4));



// const fnA = function ()  {
//     return {
//         a:5,
//     };
// };
// console.log(fnA());


// const fnA =  () => ({ a:5});
// console.log(fnA());









