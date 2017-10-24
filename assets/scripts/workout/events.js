'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const editWorkout = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('Edit workout form data is ', data)
  api.editWorkout(data)
    .then(ui.editWorkoutSuccess)
    .catch(ui.editWorkoutFailure)
}

const addWorkout = (event) => {
  // console.log('Add workout invoked')
  event.preventDefault()
  // console.log('Target is', event.target)
  const data = getFormFields(event.target)
  // console.log('Target data is ', data)
  api.addWorkout(data)
    .then(ui.addWorkoutSuccess)
    .catch(ui.addWorkoutFailure)
}

const getWorkouts = (event) => {
  // console.log('Get workouts event invoked')
  event.preventDefault()
  // console.log('Target is', event.target)
  api.getWorkouts()
    .then(ui.getWorkoutsSuccess)
    .catch(ui.getWorkoutsFailure)
}

const deleteWorkout = (event) => {
  // console.log('Delete workout event invoked')
  event.preventDefault()
  // console.log('Target is', event.target)
  const data = getFormFields(event.target)
  const modalName = '#deleteWorkoutModal' + data.workout.id
  api.deleteWorkout(data)
    .then($(modalName).modal('hide').on('hidden.bs.modal', ui.clearWorkouts))
    .then(ui.deleteWorkoutSuccess)
    .catch(ui.deleteWorkoutFailure)
}

const analyzeWorkouts = (event) => {
  // console.log('Analyze workout event invoked')
  event.preventDefault()
  // console.log('Target is', event.target)
  api.getWorkouts()
    .then(ui.analyzeWorkoutSuccess)
    .catch(ui.getWorkoutsFailure)
}

const generateWorkout = (event) => {
  const exerciseOne = exercisesOne[Math.floor(Math.random() * exercisesOne.length)]
  const exerciseTwo = exercisesTwo[Math.floor(Math.random() * exercisesTwo.length)]
  const exerciseThree = exercisesThree[Math.floor(Math.random() * exercisesThree.length)]
  const exerciseFour = exercisesFour[Math.floor(Math.random() * exercisesFour.length)]
  const exerciseFive = exercisesFive[Math.floor(Math.random() * exercisesFive.length)]
  const newWorkout = '4 rounds of: ' + exerciseOne + ', ' + exerciseTwo + ', ' + exerciseThree + ', ' + exerciseFour + ', ' + exerciseFive

  const warmupOne = warmupOneList[Math.floor(Math.random() * warmupOneList.length)]
  const warmupTwo = rollerList[Math.floor(Math.random() * rollerList.length)]
  const newWarmup = warmupOne + ' then foam roller work of ' + warmupTwo + '. Stretch any other tight areas as necessary.'

  const mobilityOne = mobilityOneList[Math.floor(Math.random() * mobilityOneList.length)]
  const mobilityTwo = mobilityTwoList[Math.floor(Math.random() * mobilityTwoList.length)]
  const mobilityThree = mobilityThreeList[Math.floor(Math.random() * mobilityThreeList.length)]
  const newMobility = mobilityOne + ' followed by ' + mobilityTwo + ' and finish with ' + mobilityThree + '.'

  const strengthOne = strengthWork[Math.floor(Math.random() * strengthWork.length)]
  $('#warmupcontainer').text(newWarmup)
  $('#mobilitycontainer').text(newMobility)
  $('#strengthcontainer').text(strengthOne)
  $('#randomworkoutcontainer').text(newWorkout)
}

const warmupOneList = ['5-7 minute run at 7 MPH', '5-7 minute row, low resistance', '5-7 minute jump rope']
const rollerList = ['2 mins each side IT band mobility', '2 mins each side lat mobility', '3 min thoracic spine mobility']
const mobilityOneList = ['2 mins each leg couch stretch', '2 mins each leg external rotation hip socket work', '2 mins each side hip opener']
const mobilityTwoList = ['2 mins each side trap scrub', '2 mins each arm OH shoulder banded stretch', '2 mins each side back upper rib mobility', '2 mins each arm pec scrub against rack']
const mobilityThreeList = ['15 reps slow OH squat with broomstick', '15 reps perfect bent row with barbell', '25 perfect air squats', '15 perfect deadlifts with empty barbell']
const strengthWork = ['5 sets of 5-7 reps bench press @ 80% max followed by 2 sets of 12 reps @ 50% max', '5 sets of 5-7 OH press @ 80% max followed by 2 sets of 12 reps @ 50% max', '5 sets of 5-7 squats @ 80% max followed by 2 sets of 12 reps @ 50% max', '3 sets of 5-7 reps heavy deadlift. 2 sets of 12 reps @ 50% max']

const exercisesOne = ['10 deadlift @ 115 lb', '15 thrusters @ 45lb', '10 back squats @ 110 lb', '15 back squats @ 95 lb', '12 OH lunges @ 45 lb', '10 front squats @ 95lb']
const exercisesTwo = ['100 single unders', '15 burpees', '25 pushups', '7 burpees w/ 45 lb plate to OH']
const exercisesThree = ['7 pullups', '15 KB swings', '15 box jumps', '25 body weight squats', '24 bodyweight lunges']
const exercisesFour = ['5 toes to bar', '15 situps', '10 hanging knee raises']
const exercisesFive = ['Run 400 M', 'Row 300 M']

const addHandlers = () => {
  $('#addWorkoutForm').on('submit', addWorkout)
  $('#getWorkoutsForm').on('submit', getWorkouts)
  $('#analyzeWorkoutsForm').on('submit', analyzeWorkouts)
  $('#workoutlist').on('submit', '.editWorkoutForm', editWorkout)
  $('#workoutlist').on('submit', '.deleteWorkoutForm', deleteWorkout)
  $('#randomworkoutbutton').on('click', generateWorkout)
}

module.exports = {
  addHandlers
}
