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

const addHandlers = () => {
  $('#addWorkoutForm').on('submit', addWorkout)
  $('#getWorkoutsForm').on('submit', getWorkouts)
  $('#analyzeWorkoutsForm').on('submit', analyzeWorkouts)
  $('#workoutlist').on('submit', '.editWorkoutForm', editWorkout)
  $('#workoutlist').on('submit', '.deleteWorkoutForm', deleteWorkout)
}

module.exports = {
  addHandlers
}
