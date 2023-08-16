// Iteration (Repeat) => standardized approach
// Handle collection of data by processing the first part then next() and so on
// Rather handling the entire set all at once
// Iterator pattern: we don't know how many pieces of data that will need to iterate through,
// so the pattern complete it by some special value or exception.
// Iterator pattern: standard way to process data, which create cleaner and easier code to understand.
// ES6 has a specific protocol for the iterator pattern directly in language
// next() method return an object: 1- value 2- done(boolean) false until completion
// Consuming-iterators => omit manual loop equivalent => less readable
// for (initialization; condition; afterthought) {statement}
// for(     let i=0;      i<10;       i++      ) {         }

// 1- for ... of ...
// var it = [1,2,3]
// for(let item of it){
//   console.log(item);
// }

// 2- ... operator

// An array spread
// var it = [1,2,3]
// var values = [...it]
// console.log(values);

// A function call spread
// function add(x, y, z, w, s) {
//   console.log(x+y+z+w+s);
// }
// var it = [1,2,3]
// add(...it, 4, 5)

// In both array and function call spread, we used iterator-Consuming protocol

// Iterables => An value that can be iterated over
// strings, arrays, maps, sets, and etc

//e.g1:
// var arr = [ 10, 20, 30 ];
// for (let val of arr) {
// console.log(`Array value: ${ val }`);
// }

//e.g2:
// var arrCopy = [ ...arr ] //shallow copy of array

//e.g3:
// var greeting = 'Hello World'
// var chars = [...greeting]
// console.log(chars);

//e.g4 => map => key, value pair
// var mapExample = new Map()
// mapExample.set('key1', 'value1')
// mapExample.set('key2', 'value2')

// console.log(mapExample);

// for ( let [key, value] of mapExample){
//   console.log(`this is the name of key: ${key} and this is the name of value: ${value}`);
// }

//e.g5
// var mapExample = new Map()
// mapExample.set('key1', 'value1')
// mapExample.set('key2', 'value2')

// for( let value of mapExample.values()){
//   console.log(value);
// }

// for( let key of mapExample.keys()){
//   console.log(key);
// }

// for( let [key,value] of mapExample.entries()){
//   console.log(key, value);
// }

//e.g6
// var arr = [10,20,30]
// for ( let [index, value] of arr.entries()){
//   console.log(`[${index}]: ${value}`);
// }

// closure => important like variables and loops
// - is part of the function
// - to observe it you must execute function in a different scope than where that function was defined
// function greeting(msg) {

//   return function who(name) {
//       console.log(`${ msg }, ${ name }!`);
//     };

//   }
//   var hello = greeting("Hello");
//   var howdy = greeting("Howdy");

//   hello("Kyle");
//   hello("Sarah");
//   howdy("Grant");

// we'd expect each msg to go away, but doesn't, the reason closure

// function counter(step = 1) {
//   var count = 0;
//   return function increaseCount(){
//       count = count + step;
//       console.log(count);
//     };
//   }

//   var incBy1 = counter(4);
//   var incBy3 = counter(3);

// //   incBy1();
// //   incBy1();
// //   incBy1();

//   console.log('\n');

//   incBy3();
//   incBy3();
//   incBy3();

// closures are not snapshot, they are direct link, that means they can update over time

// closure is most common when working with asynchronous code, such as with callbacks

// function getSomeData(url) {
//     ajax(url,function onResponse(resp){
//       console.log(`Response (from ${ url }): ${ resp }`);
//     });
//   }
// getSomeData("https://some.url/wherever");

// closed over url, remember until response, after we can use it again cause of closure

// is not necessary outer scope is function
// for (let [idx,btn] of buttons.entries()) {
//       btn.addEventListener("click",function onClick(){
//       console.log(`Clicked on button (${ idx })!`);
//     });
//   }

// 'this' keyword
// misunderstood => Both incorrect
// 1- function's 'this' refers to the function itself
// 2- 'this' points the instance that a method belong to

// function has two things: scope and execution context
// scope: static, contains fixed set of variables
// execution context: dynamic, depend on how function calls (regardless where defined or called from)

// execution context is exposed(showed) to the function via its 'this' value.

// // e.g:
// function classroom(teacher){
//   return function study(){ // this-aware function, is dependant on its execution context
//     console.log(teacher + ' ' + this.topic);
//   }
// }

// var assignment = classroom('Kyle')
// assignment()

// call as normal function without provide any execution context
// since we are not in strict mode, 'this' refers to window(browser) or global(nodejs) object, so it hasn't topic property to return undefined

// e.g:
// var homework = {
//   topic: 'JS',
//   assignment: assignment
// }
// homework.assignment()

// // e.g:
// var anotherHomework = {
//   topic: 'Math'
// }
// assignment.call(anotherHomework)

// benefit of 'this':
// 1- more flexibility re-use a single function with data from different object
// 2- quite helpful for certain task cause of context awareness

// this => for function execution
// Prototype => for object, linkage between objects, it is hidden, but there are ways to observe and expose.
// prototype linkage occurs when an object is created. link to another object that already exist
// Prototype Chain: A series of objects linked together via prototypes
// Purpose: object A and object B, B has sth that A doesn't, A delegated some properties and method to B, cooperate with together to perform a task.

var homework = {
    topic: 'JS',
    toString(){

    }
}
// // it has default prototype that related to Object.prototype object
homework.toString()

console.log(homework.toString());
// // it works because because the chain between Object.prototype and homework

// // to defined linkage, we use Object.create
// var homework = { topic: 'JS'}
// var anotherHomework = Object.create(homework) // return newly created and linked object
// anotherHomework.topic = 'Math'
// console.log(anotherHomework.topic);
// console.log(homework.topic);
// Object.create(null) => return object without linked anywhere. purely standalone.

// const test = Object.create(null)
// test.topic = 'JS'
// console.log(test);

// another way of prototype is using ES6 classes pattern

// var homework = {
//   study(){
//     console.log(this.topic);
//   }
// }

// var JSHomework = Object.create(homework)
// JSHomework.topic = 'JS'
// JSHomework.study()

// var mathHomework = Object.create(homework)
// mathHomework.topic = 'Math'
// mathHomework.study()
