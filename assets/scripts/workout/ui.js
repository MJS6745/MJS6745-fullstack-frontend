'use strict'

const store = require('../store')
const showWorkoutsTemplate = require('../templates/workouts.handlebars')

const addWorkoutSuccess = (data) => {
  console.log('Add workout success invoked. Data is', data)
  $('#addWorkoutModal').modal('hide')
  document.getElementById('addWorkoutForm').reset()
  $('#addWorkoutMessage').text('Workout successfully added')
  $('#addWorkoutMessageModal').modal('show')
}

const addWorkoutFailure = (error) => {
  console.log('Add workout failure. Error is', error)
  $('#addWorkoutModal').modal('hide')
  document.getElementById('addWorkoutForm').reset()
  $('#addWorkoutMessage').text('Oops! There was an error')
  $('#addWorkoutMessageModal').modal('show')
}

const getWorkoutsSuccess = (data) => {
  console.log('Get workout success invoked. Data is', data)
  $('#getWorkoutsModal').modal('hide')
  const showWorkoutsHtml = showWorkoutsTemplate({ workouts: data.workouts })
  console.log('Show workout html is', showWorkoutsHtml)
  $('#workoutlist').append(showWorkoutsHtml)
}

const getWorkoutsFailure = (error) => {
  console.log('Get workout failure. Error is', error)
  $('#getWorkoutsModal').modal('hide')
  $('#getWorkoutsMessageModal').modal('show')
}

module.exports = {
  addWorkoutSuccess,
  addWorkoutFailure,
  getWorkoutsSuccess,
  getWorkoutsFailure
}
