'use strict'

const store = require('../store')
const showWorkoutsTemplate = require('../templates/workouts.handlebars')
const events = require('./events')

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
  $('#workoutlist').empty()
  const showWorkoutsHtml = showWorkoutsTemplate({ workouts: data.workouts })
  // console.log('Show workout html is', showWorkoutsHtml)
  $('#workoutlist').append(showWorkoutsHtml)
}

const getWorkoutsFailure = (error) => {
  console.log('Get workout failure. Error is', error)
  $('#getWorkoutsModal').modal('hide')
  $('#getWorkoutsMessageModal').modal('show')
}

const editWorkoutSuccess = (data) => {
  // $('#workoutlist').empty()
  console.log('editWorkoutSuccess invoked. Data is', data)
  const modalName = '#editWorkoutModal' + data.workout.id
  $(modalName).modal('hide')
  $('#editWorkoutsMessageModal').modal('show')
}

const editWorkoutFailure = (error) => {
  console.log('Edit workout failure. Error is', error)
  $('#editWorkoutMessageTitle').text('Oops! There was an error')
  $('#editWorkoutMessageBody').text('Please try again later')
}

module.exports = {
  addWorkoutSuccess,
  addWorkoutFailure,
  getWorkoutsSuccess,
  getWorkoutsFailure,
  editWorkoutSuccess,
  editWorkoutFailure
}
