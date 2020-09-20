// const showTag = function () {
//     console.log('showTag -> this, this');
//     console.log('showTag -> this.tag, this.tag');

// };
// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);
// user.showUserTag;



// 
// const user = {
//     tag: 'Mango',
//      showTag () {
//         console.log(this);
//         console.log(this.tag);
    
//     },
// };

// user.showTag();
// const outerShow = user.showTag;
// outerShow();


// const book = {
//     title: 'react',
//     showThis(){
//         console.log(this);
//     },
//     showTitle(){
//         console.log(this.showTitle);
//     },
// };

// book.showThis();



// const makeChangeColor = function () {
//     const changeColor = function (color) {
// console.log('changeColor -> this', this);
// // this.color = color;
//     };

// // const sweater = {
// //     color: 'teal',
// //     };
// //     sweater.updateColor = changeColor;
// //     sweater.updateColor('red');
// return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow');

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// console.log(hat.updateColor);
// hat.updateColor('orange');
// console.log(sweater.updateColor('red'));


const counter = {
     value: 0,
    increment(value){
        console.log('increment -> this', this),
        this.value+= 1;
    },

    decrement(value){
        console.log('decrement -> this', this), 
        this.value-= 1;

    },
  
};

const updateCounter = function(value, operation) {
    operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement);

console.log(counter);

const decremenBtn = document.querySelector('.js-decrement');
const incremenBtn = document.querySelector('.js-increment');
const valueEL = document.querySelector('.js-value');
console.log(decremenBtn);
console.log(incremenBtn);

console.log(valueEL);

incremenBtn.addEventListener('click', function(){
    console.log('click n iy');
    counter.increment();
    console.log(counter);
});

decremenBtn.addEventListener('click', function(){
    console.log('click n iy')
});
// const showThis = function() {
//     console.log('showTis->', this)
// };

// showThis();

// const blah = {
//     oh:7,
//     sos:4,
// };


// showThis.call(blah, 3, 2);

// showThis.apply(blah, [7, 9]);

const changeColor = function(color){
    console.log('changeColor->this', this);
    this.color = color;
    
};

const hat = {
    color: 'black',
}

changeColor.call(hat, 'orange');
console.log(hat);


const changeHatColor = changeColor.bind(hat, 'blue');

changeHatColor();
console.log(changeHatColor);

console.log(hat);




