'use strict';


// const p=document.querySelector('.p');
// setTimeout(function(){
//   p.textContent='My name is Jonas!'
// },5000)

// p.style.color='red';



const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
/*
const renderCountry = function(data,className=''){
  const html=`
  <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;
countriesContainer.insertAdjacentHTML('beforeend', html);
countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour= function(country){

  //  AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`)
  request.send();
  // console.log(this.responseText)

  request.addEventListener('load',function(){
    // console.log(this.responseText);
    
    const [data]=JSON.parse(this.responseText);
    console.log(data)
    
    // Render country 1
    renderCountry(data)

    // Get neighbour country
    const [neighbour] = data.borders

    if(!neighbour) return;

    //  AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
    request2.send();

    request2.addEventListener('load',function(){
      const data2 = JSON.parse(this.responseText)
      console.log(data2);

      renderCountry(data2, 'neighbour')
    })
  })
}

// getCountryAndNeighbour('portugal')
getCountryAndNeighbour('usa')
// getCountryData('germany')
*/

/*
// call back hell is when we have a lot of nested callbacks in order to execute asynchronus tasks in sequence.And in fact, this happens for all asynchornus tasks , whic are handles by callbacks


setTimeout(function(){
 console.log('1 seconds passed');
 setTimeout(function(){
  console.log('2 seconds passed')
  setTimeout(function(){
    console.log('3 seconds passed')
    setTimeout(function(){
      console.log('4 seconds passed')
     },1000)
   },1000)
 },1000)
},1000)

*/


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`)
// request.send();
/*
Promise : An object that is used as a placeholder for the future result of an asynchronus operations
Promise : A container for an asynchronusly delivered value.
promise: A container for a future CSSMathValue


Promise that I will receive money if I guess correct outcome
I buy lottery ticket(promise) rightnow 
Lottery draw happens asynchronusly 
If correct outcome , i receive money , because it was promised

- We no longer need to rely on events and callbacks passed into asynchronus functions to handle asynchoronus results;
- Instead of nesting callbacks , we can chain promises for a sequence  of asynchronus operations: escaping callback hell
*/

const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request)

const getCountryData = function(country){
  fetch(`https://restcountries.com/v2/name/${country}`)
}

// consuming promises
// Changing Promises
// Handling Rejected Promises
// Throwing Error Manually

const getCountData=function(country){
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function(data){
    console.log(data)
    renderCountry(data[0])
  })
}

const getCountryData=function(country){
  // // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response=>{
    console.log(response)

    if(!response.ok)
      throw new Error(`Country not found (${response.status})`);

    return response.json();
  })

  .then(data=>{
    renderCountry(data[0]);
    //const neighbour=data[0].border[0]
    const neighbour='dfsdfef'

    if(!neighbour) return;
    // Country 2

    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
  })
  .then(response=>{
    if(!response.ok)
      throw new Error(`Counrty not found (${response.status})`)

    return response.json();
  })
  .then(data=>renderCountry(data,'neighbour'))
  .catch(err=>{
    console.error(`${err}`);
    renderError(`Something went wrong ${err.message}. Try again!`)
  })
  .finally(()=>{
    countriesContainer.computedStyleMap.opacity=1
  })
}