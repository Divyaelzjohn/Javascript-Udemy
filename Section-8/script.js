// Javascript is a high -level object-oriented , multi-paradigm programming language
/*
'use strict';
function calcAge(birthYear){
  const age=2037-birthYear;
  // console.log(firstName);
  function printAge(){
    let output=`${firstName},You are ${age},born in ${birthYear}`;
    console.log(output);  

    if(birthYear>=1981 && birthYear<=1996){
      var millenial=true;
       //Creating NEW variable with same name as outer scope's variable
      const firstName='Steven'
      // Reassigning outer scop's variable
      const output='NEW OUTPUT!';

      const str=`Oh, and you're millenial,${firstName}`;
      console.log(str);
      
      function add(a,b){
        return a+b
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2,3))
    console.log(output);
  }
  printAge();
  return age;
 }
const firstName='Jonas';
calcAge(1991);
// console.log(age);
// printAge(); 
*/

/*  
  var me = 'Jonas';
  let job = 'teacher';
  const year = 1991;

  // Functions
  console.log(addDecl(2, 3));
  // console.log(addExpr(2, 3));
  // console.log(addArrow(2, 3));
  function addDecl(a,b){
    return a+b;
  }
  const addExpr=function(a,b){
    return a+b;
  }
  var addArrow=(a,b)=>a+b;

  // Example 
  console.log(undefined)
  if (!numProducts) deleteShoppingCart();

  var numProducts = 10;
  
  function deleteShoppingCart() {
    console.log('All products deleted!');
  }

  var x = 1;
  let y = 2;
  const z = 3;
  console.log(x === window.x);
  console.log(y === window.y);
  console.log(z === window.z);
    
*/

    /*
     console.log(this);

    const calcAge = function (birthYear) {
      console.log(2037 - birthYear);
      console.log(this);
    };
    calcAge(1991);

    const calcAgeArrow = birthYear => {
      console.log(2037 - birthYear);
      // console.log(this);
    };
    calcAgeArrow(1980);

    // inside methods
    const jonas = {
      year: 1991,
      calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
      },
    };
    jonas.calcAge();
    
    const matilda= {
      year: 2017,
    };
    matilda.calcAge=jonas.calcAge;
    matilda.calcAge();
    const f=jonas.calcAge;
    f();
  */

/*
// var firstName='Matilda'

    const jonas = {
      firstName:'Jonas',
      year: 1991,
      calcAge: function () {
        // console.log(this);
       
        console.log(2037 - this.year);

        // Solution 1
        // const self=this;
        // const isMillenial=function(){
        //   console.log(self);
        //   console.log(self.year>=1981&&self.year<=1996)
        //   // console.log(this.year>=1981&&this.year<=1996)
        // }

        // Solution 2
        const isMillenial=()=>{
        console.log(this);
        console.log(this.year>=1981&&this.year<=1996);
        }
        isMillenial();
      },

      // greet:function(){
      //   console.log(this)
      //   console.log(`Hey ${this.firstName}`)}

      greet:()=>{
        console.log(this)
        console.log(`Hey ${this.firstName}`)}
    }; 
    jonas.greet()
    // console.log(this.firstName)
    jonas.calcAge()


    // Argument keyword
    const addExpr=function(a,b){
      console.log(arguments)
      return a+b
    }
    addExpr(2,5);
    addExpr(2,5,8,12);
    var addArrow=(a,b)=>{
      console.log(arguments)
      return a+b;
    }
    addArrow(2,5,8);
*/
/*
const jessica={
  firstName:'Jessica',
  lastName:'Williams',
  age:27,
};

function marryPerson(originalPerson,newLastName){
 originalPerson.lastName=newLastName;
 return originalPerson;
}
const marriedJessica=marryPerson(jessica,'Davis')

// const marriedJessica=jessica;
// marriedJessica.lastName='Davis'

console.log('Before:',jessica)
console.log('After:',marriedJessica)

// jessica={x:23}

const jessica2={
  firstName:'Jessica',
  lastName:'Williams',
  age:27,
  familiy:['Alice','Bob']
};

//Shallow copy
const jessicaCopy = {...jessica2};
jessicaCopy.lastName='Davis';

// console.log(jessica2,jessicaCopy);
// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');


// console.log('Before:',jessica2)
// console.log('After:',jessicaCopy)

// Deep copy/clone
const jessicaClone= structuredClone(jessica2);
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');


console.log('Original:',jessica2);
console.log('Clone:',jessicaCopy);
*/

// Closure prototypal inheritance event loop 

let myName="Divya"
function outer(){
  let age=25;
  function inner(){
    console.log(myName);
    console.log(age)
  }
  inner()
}
outer()

