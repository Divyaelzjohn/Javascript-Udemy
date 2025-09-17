'use strict';

// prettier-ignore
const months = ['January','February','March','April','May','June','July','August','Spetember','October','November','December']

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// let map, mapEvent;

class Workout{
  date= new Date();
  // id = (new Date()+'').slice(-10);
  id = (Date.now()+'').slice(-10);

  constructor(coords, distance, duration){
    this.coords=coords;       // [lat,lng]
    this.distance=distance;   // in km
    this.duration=duration;   // in min 
  }
}

class Running extends Workout{
  constructor(coords, distance,duration,cadence){
    super(coords, distance,duration);
    this.cadence=cadence;
    this.calcPace();
  }

  calcPace(){
    // min/km
    this.pace=this.duration/this.distance;
    return this.pace
  }
}

class Cycling extends Workout{
  constructor(coords, distance,duration,evationGain){
    super(coords, distance,duration);
    this.evationGain=evationGain;
    this.calcSpeed();
  }

  calcSpeed(){
    // km/h
    this.speed = this.distance/(this.duration/60)
    return this.speed
  }
}

// const run1=new Running([39,-12],5.2,24,178)
// const cycling1=new Cycling([39,-12],27,95,523)
// console.log(run1,cycling1)

////////////////////////////////////////////////////////////////////
// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let workout;

class App{
  #map;
  #mapEvent;
  #workouts=[];

  constructor(){
    // this.workouts=[];
    this._getPosition();

    // form.addEventListener('submit',function(e){})
    form.addEventListener('submit',this._newWorkout.bind(this));

    // inputType.addEventListener('change', function(){
    //   inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    //   inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    // })

    inputType.addEventListener('change',this._toggleElevationField)
    
  }

  _getPosition(){

    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
    this._loadMap.bind(this),function(){
        alert('Could not get your position')
      });
      
      // console.log(firstName) 

  }

  _loadMap(position){
    // function(position){
      const {latitude}=position.coords
      const {longitude}=position.coords
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`)
    // console.log(position)
    // console.log(latitude,longitude)
  
    const coords=[latitude, longitude]
  
    console.log(this)

    this.#map = L.map('map').setView(coords, 13);
    // console.log(map);
  
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
  
    // Handling clicks on map
    this.#map.on('click',this._showForm.bind(this));
      // this.#map.on('click',function(mapE){
  
        // this.#mapEvent=mapE;
        // form.classList.remove('hidden');
        // inputDistance.focus();
  
        // console.log(mapEvent);
        // const{lat,lng}=mapEvent.latlng
  
        // L.marker([lat, lng])
        // .addTo(map)
        // // .bindPopup('Workout')
        // .bindPopup(L.popup({
        //   maxWidth:250,
        //   minWidth:100,
        //   autoClose:false,
        //   closeOnClick:false,
        //   className:'running-popup'
        // }))
        // .setPopupContent('Workout')
        // .openPopup();
      // })
    // }
  }

  _showForm(mapE){
    this.#mapEvent=mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
  }

  _newWorkout(e){
    const validInputs=(...inputs)=>inputs.every(inp=>Number.isFinite(inp))
    const allPositive = (...inputs)=>inputs.every(inp=>inp>0)

    e.preventDefault();
    // console.log(this)

    // Get data from form

    const type=inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const{lat,lng}=this.#mapEvent.latlng

    
    // If workout running, create running object
    if(type==='running'){
      const cadence=+inputCadence.value
      // Check if data is valid
      if(
        // !Number.isFinite(distance)|| 
        // !Number.isFinite(duration)||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence)|| !allPositive(distance, duration, cadence)
      )
       return alert('Inputs have to be positive numbers!')

      //  const workout= new Running(this.#mapEvent.latlng)

        workout= new Running([lat,lng],distance,duration , cadence)
      //  this.#workouts.push(workout);
    }

    // If workout cycling , create cycling object
    if(type==='cycling'){
      const elevation=+inputElevation.value
      if(
        // !Number.isFinite(distance)|| 
        // !Number.isFinite(duration)||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, elevation)|| !allPositive(distance,duration)
      )
       return alert('Inputs have to be positive numbers!')

       workout= new Cycling([lat,lng],distance,duration,elevation)
    }

    // Add new object to workout array

    this.#workouts.push(workout);
    console.log(workout)

    // Render workout on map as marker

    // console.log(this.#mapEvent);    
    // const{lat,lng}=this.#mapEvent.latlng
    // L.marker([lat, lng])
    //   .addTo(this.#map)
    //   // .bindPopup('Workout')
    //   .bindPopup(L.popup({
    //     maxWidth:250,
    //     minWidth:100,
    //     autoClose:false,
    //     closeOnClick:false,
    //     className:`${type}-popup`
    //   }))
    //   .setPopupContent('Workout')
    //   .openPopup();

    // Render workout on list

    // Hide form+clear input fields
    inputDistance.value  = inputDuration.value  =inputCadence.value  = inputElevation.value = '';

   /* // Dispaly marker
    // console.log(this.#mapEvent);    
    const{lat,lng}=this.#mapEvent.latlng
    L.marker([lat, lng])
      .addTo(this.#map)
      // .bindPopup('Workout')
      .bindPopup(L.popup({
        maxWidth:250,
        minWidth:100,
        autoClose:false,
        closeOnClick:false,
        className:'running-popup'
      }))
      .setPopupContent('Workout')
      .openPopup();*/
    

      renderWorkoutMarker(workout){
        L.marker([lat, lng])
        .addTo(this.#map)
        // .bindPopup('Workout')
        .bindPopup(L.popup({
          maxWidth:250,
          minWidth:100,
          autoClose:false,
          closeOnClick:false,
          className:`${type}-popup`
        }))
        .setPopupContent('Workout.distance')
        .openPopup();
      }

      // reset(){
      //   localStorage.removeItem('worouts';
      //   location.reload()
      //   )
      // }
  }
}

const app=new App();
