'use strict';

/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


// function caller doest provide a value for numPassenger then js will automaticclay set it to 1 
Without defaults, if you forget to pass a value, you get undefined.

///////////////////////////////////////
*/
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight,jonas);
// console.log(flight)
// console.log(jonas)

// // flightNum=flight;

// // Is the sasme as doing
// const flightNum=flight;
// const passenger=jonas;


const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
*/
// Higher order function?a higher-order function[HOF] ia a function that takes another function as an argumnets(callback),Or returns another function

/* // Remove spaces + lowercase
function oneWord(str) {
  return str.replace(/\s+/g, '').toLowerCase();
}
// Make first word uppercase
function upperFirstWord(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher-order function- we pass fn(a function) as an argument.Inside transformer, we call fn(str). fn could be any function that transforms a string
//transformer ->we don't call upppperFIrstWOrd() or oneword() directly.We just pass them as arguments-> transformer calls them later
const transformer=function(str,fn){
  console.log(`Original string:${str}`)
  console.log(`Transformed string:${fn(str)}`)
  console.log(`Transformed by:${fn.name}`)
}
transformer('Javascript is the best!',upperFirstWord)
transformer('Javascript is the best!',oneWord)

// JS uses callbacks all the time
const high5=function(){
  console.log('hi')
}
document.body.addEventListener('click',high5);

['Jonas','Marths','Adam'].forEach(high5)
*/

/*
const greet=function(greeting){
  return function(name){
    console.log(`${greeting}${name}`)
  }
}
const greeterHey=greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')
greet('Hello')('Jonas');

// challenge
const greetArr=greeting=>name=>    console.log(`${greeting}${name}`);
('Hi')('Jonas');*/


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;


// Does NOT work
// book(23, 'Sarah Williams');   // now book is just a regular function not attached to any object. When you call it, there's no object before the dot. In strict mode-> this=undefined. In non-strict mode this =window(browser global object) Since window has no airline or iateCode , you get ubdefibed

// Call method  ->lets you manually set this. Now this=eurowings, so everything works
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa,239,'Mary Cooper')
// console.log(lufthansa);

// const swiss = {
//   airline: 'EuSwiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 583, 'Sarah Williams');
// console.log(swiss);


// // Apply method ->argument array aayi pass cheyyum
// const flightData=[583,'George Cooper']
// book.apply(swiss,flightData)
// console.log(swiss);

// book.call(swiss,...flightData);

// //Bind method -> new function return cheyyum, pinne aa new function call cheyyam

// // book.call(eurowings, 23, 'Sarah Williams');
// 

// const bookEW=book.bind(eurowings);
// const bookLH=book.bind(lufthansa);
// const bookLX=book.bind(swiss);

// bookEW(23,"Steaven Williams");

// const bookEW23=book.bind(eurowings,23);
// bookEW23('Jonas Schmedtmann');
// bookEW23("Marths Copper");

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane()

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application 
// // const bookEW23=book.bind(eurowings,23);bookEW23('Jonas Schedtmann);bookEW23('Martha cooper`)  ->  ivide flightNum=23 already present ayirikku,. Ini passenger name mathram koduthal mathy
// //partial application with out this
// const addTax=(rate,value)=>value+value*rate;
// console.log(addTax(0.1,200));

// const addVAT=addTax.bind(null, 0.23)
// // addVAT=value=>value+value*0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate=function(rate){
//   return function(value){
//     return value+value*rate;
//   }
// }
// const addVAT2=addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

/*const airIndia = {
  airline: 'Air India',
  iataCode: 'AI',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }
};
airIndia.book(101,'Divya');airIndia.book(202,'Rahul');console.log(airIndia.bookings);

const book=airIndia.book;
const indigo = {
  airline: 'Indigo',
  iataCode: '6E',
  bookings: []
};
book.call(indigo,303,'Anjali');
book.call(indigo,404,'Ravi');console.log(indigo.bookings)

const spiceJet = {
  airline: 'SpiceJet',
  iataCode: 'SJ',
  bookings: []
};
const flightData=[505,'Neha Sharma']
book.apply(spiceJet,flightData);
console.log(spiceJet.bookings);*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
/*
const poll = {
  question:' What is your favourite programming language?',
  options:['0: JavaScript','1: Python','2: Rust','3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers:new Array(4).fill(0),
  registerNewAnswer(){
    //Get answer
    const answer=Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
    console.log(answer)  
    //Register answer
    typeof answer === 'number' &&
    answer < this.answers.length &&
    this.answers[answer]++;

    // console.log(this.answers)
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type='array'){
    if(type==='array'){
      console.log(this.answers);
    }else if(type==='string'){
      console.log(`Poll results are ${this.answers.join(', ')}`)
    }
  }
}
// poll.registerNewAnswer()

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answers:[5,2,3]},'string')
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]},'string')
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]})
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/

/*
const runOnce=function(){
  console.log('This will never run again');
}
runOnce();
// IIFE
(function(){
  console.log('This will never run again')
  const isPrivate=23;
})();

console.log(isPrivate)
(()=>console.log('This will ALSO never run again'))();

{
  const isPrivate=23;
  var notPrivate=46;
}
// console.log(isPrivate)
console.log(notPrivate)
*/

/*const secureBooking=function(){
  let passengerCount=0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`)
  }
}
const booker=secureBooking();
booker()*/

// secureBooking() call cheyyumbol local variale pasengerCOunt=0 create cheyyum.return function()->inner function return cheyyum . SecureBooking() execution context stack-il ninn purathakum. Satharanayayi variables(passengerCOunt) vanish cheyyanm. pakshe inner function(booker) create cheythappol ath closure vazhi parent scope-le variables-ne carry cheythu.booker() call cheyymbol,ath passengerCount increment chyeyunnu karanm ath closure-il safe ayi store chythirikkunnu

// global scope securebooking, passegercount=0secureBooking =<f> what execution enterance memmory 
/*
// Example 1
let f;
const g=function(){
  const a=23;
  f=function(){
    console.log(a*2)
  }
}

const h=function(){
  const b=777;
  f=function(){
    console.log(b*2)
  }
}

g();
f();
console.dir(f)
// Reassigneding f function
h();
f();
console.dir(f)

// Example 2
const boardPassengers=function(n, wait){
  const perGroup=n/3;
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`)
    console.log(`There are 3 groups,each with ${perGroup} passengers`)
  },wait*1000)
  console.log(`Will start boarding in ${wait} seconds`)
}
const perGroup=1000;
boardPassengers(180,3)*/


// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

*/

(function(){
  const header=document.querySelector('h1');
  header.style.color='red'

  document.querySelector('body').addEventListener('click',function(){
      header.style.color='blue'
  })
})();

// why did its work? ->  bithplace remembers  header backpack try to explain 
