// const printMessage = function(message) {
//     console.log(message);
//   };
  
//   const higherOrderFunction = function(callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
//   };
  
//   higherOrderFunction(printMessage);



//   for (let i = 0; i < 10; i += 1) {
//     console.log(i);
//   }
//   const repeatLog = function(n) {
//     for (let i = 0; i < n; i += 1) {
//       console.log(i);
//     }
//   };
  
//   repeatLog(5);

  
//   const printValue = function(value) {
//     console.log(value);
//   };
  
//   const prettyPrint = function(value) {
//     console.log('Logging value: ', value);
//   };
  
//   const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };
  
//   // Передаем printValue как callback-функцию
//   repeat(3, printValue);
//   // 0
//   // 1
//   // 2
  
//   // Передаем prettyPrint как callback-функцию
//   repeat(3, prettyPrint);
//   // Logging value: 0
//   // Logging value: 1
//   // Logging value: 2

  

  const repeat = function(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  };
  
  const labels = [];
  
  repeat(5, value => {
    labels.push(`Label ${value + 1}`);
  });
  
  console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]
  

//     const filter = function(array) {
//         for (const element of array) {
//         }
//   };
  
  
//   const filter = function(array, test) {
//     for (const element of array) {
//       test(element);
//     }
//   };
//   const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       test(element);
//     }
  
//     return filteredElements;
//   };
  
  
//   const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       const passed = test(element);
  
//       if (passed) {
//         filteredElements.push(element);
//       }
//     }
  
//     return filteredElements;
//   };
  


//   const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       const passed = test(element);
  
//       if (passed) {
//         filteredElements.push(element);
//       }
//     }
  
//     return filteredElements;
//   };
  
//   const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];
  
// //   const freshFruits = filter(fruits, fruit => fruit.isFresh);
// //   console.log(freshFruits); // массив с объектами apples и bananas
  
//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithAmount); // массив с объектами apples и grapes
  

//   const bar = function() {
//     console.log('bar');
//   };
  
//   const baz = function() {
//     console.log('baz');
//   };
  
//   const foo = function() {
// //     console.log('foo');
// //     bar();
// //     baz();
// //   };
  
// //   foo();
//   //





// //   лексичне оточення
// /*
//   Global env - создается при исполнении файла скрипта
//     Record: {}
//     Parent: null
// */

// const x = 10;
// /*
//   Global env
//     Record: {x: 10}
//     Parent: null
// */

// const y = 20;
// /*
//   Global env
//     Record: {x: 10, y: 20}
//     Parent: null
// */

// /*
//   Записывается в момент объявления функции
//   [[Environment]] = Global env
// */
// const foo = function(z) {
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30}
//       Parent: Global env
//   */

//   const x = 100;
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30, x: 100}
//       Parent: Global env
//   */

//   return x + y + z;
// };

// /*
//   Global env
//     Record: {x: 10, y: 20, foo: <function>}
//     Parent: null
// */

// foo(30); // 150


// const createCounter = function() {
//     /*
//      * Локальная переменная privateValue доступна только в замыкании.
//      * Получить к ней доступ во внешнем коде невозможно.
//      */
//     let privateValue = 0;
  
//     const increment = function() {
//       privateValue += 1;
//       console.log(privateValue);
//     };
  
//     return {
//       increment,
//     };
//   };
  
//   const counterA = createCounter();
//   counterA.increment(); // 1
//   counterA.increment(); // 2
  
//   const counterB = createCounter();
//   counterB.increment(); // 1
//   counterB.increment(); // 2
//   counterB.increment(); // 3



//   // замикание
  
//   const makeDish = function(shefName, dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
  
//   makeDish('Mango', 'apple pie'); // Mango is cooking apple pie
//   makeDish('Mango', 'fish'); // Mango is cooking fish
//   makeDish('Mango', 'beef stew'); // Mango is cooking beef stew
  
//   makeDish('Poly', 'muffins'); // Poly is cooking muffins
//   makeDish('Poly', 'pork chops'); // Poly is cooking pork chops
//   makeDish('Poly', 'roast beef'); // Poly is cooking roast beef

  

//   const makeShef = function(name) {
//     /*
//      * Параметр name это локальная переменная для функции makeShef.
//      * Это значит что она будет доступна функции makeDish через замыкание.
//      */
//     return function makeDish(dish) {
//       console.log(`${name} is cooking ${dish}`);
//     };
//   };
  
//   const mango = makeShef('Mango');
//   mango('apple pie'); // Mango is cooking apple pie
//   mango('beef stew'); // Mango is cooking beef stew
  
//   const poly = makeShef('Poly');
//   poly('pancakes'); // Poly is cooking pancakes
//   poly('eggs and bacon'); // Poly is cooking eggs and bacon
  

//ключове слово this

// Петя бежит быстро, потому что Петя пытается поймать поезд.
const petya = {
    name: 'Petya',
    showName() {
      console.log(petya.name);
    },
  };
  
  petya.showName();
  

  function fn() {
    console.log(this);
  }
  
  fn(); // window без "use strict" и udefined с "use strict"
  









