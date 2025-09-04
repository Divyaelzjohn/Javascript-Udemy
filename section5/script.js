/*
He didn't have a clear goal at the beginning of this journy - ser a specific ,measurable , realistic and time-based goal ,Know exactly why you are learning to code: switching careers?Finding a better job? , imagin a big project you want to be able tobuild , Research technologies you nee dand then learn them
He would just copy the code without caring how it works.Sometimes he would just copy and paste code- Understand the code that you're studing and typing , always type the code , don't copy paste
He did't reinforce what he was learning by doing smal challenges or taking notes -> After you learn a new feature or concepts , use it immediately ,take notes, challenge yourself and practice with small coding exercise and challenges, Dont be in hurry ti complete course fast
He did't practice coding  and did't come up with his own project ideas ->Practicing on your own is the most important thing to do , This not optional without practice outside of coureses, you won't go anywhere , COme up with your own project ideas or copy popular sites or applications, or just parts of them in the begining, Dont be stuck in "tutorial hell"
He quickly became frustrated when his code was not perfectly clean or efficient -> Dont get stuck trying to write the perfect code!, Just write tones of code , no matter the quality, CLean and efficient code will come with time , You can always refactor code later
He lost motivation because he thought he could never know everything -> Embrace the fact that you will never you know everything , Just focus on what you need to achieve your goal
He was learning in isolation -> Explain new concepts to other people ,. If you can explain it you truly understand it , Share your goals to make youself accountable , SHare your learning progress with the web dev community 
After finishing a couple of courses he thought he now was a web developer and could start applying to jobs. The biggest miscone mufasa start to much pair now start learning you keep challenging your self 
*/

// Remember, we're gonna use strict mode in all scripts now!
'use strict';


///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);*/

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/*const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);*/

// Idetify->Find->Fix->Prevent 
/*
const measureKelvin=function(){
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
    // value: 10,
  };
  console.log(measurement)
  console.table(measurement)
  // console.log(measurement.value)
  // console.warn(measurement.value)10
  const kelvin=measurement.value+273;
  return kelvin;
};
// A]IDENTIFY
console.log(measureKelvin())
*/


// Ask to write code snippests, functions and even generate entire files, Use code-aware autocomplete ,Chat with your codebase

// Correct or improve the solution
/*
-You need to know how to code on your own. DUndamental skills are 100% essential!
-You need to be able to solve problems on your own
3.You need to have very critical thinking(AI code contains a surprising amount of bugs or bad code)
-You need to have curiosity and joy while coding 


-when you could have written the code yourself
-When you truly understand the generated code
-When you have ensured the code is 100% correct
-When you're not using the code for mission-critical parts of your apps
*/