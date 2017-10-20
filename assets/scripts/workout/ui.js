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
  console.log('editWorkoutSuccess invoked. Data is', data)
  const modalName = '#editWorkoutModal' + data.workout.id
  console.log('Modal name is', modalName)
  $(modalName).modal('hide').on('hidden.bs.modal', clearWorkouts)
  $('#editWorkoutsMessageModal').modal('show')
}

const editWorkoutFailure = (error) => {
  console.log('Edit workout failure. Error is', error)
  const modalName = '#editWorkoutModal' + error.workout.id
  $(modalName).modal('hide')
  $('#editWorkoutsMessageTitle').text('Oops! There was an error')
  $('#editWorkoutsMessageBody').text('Please try again later')
  $('#editWorkoutsMessageModal').modal('show')
}

const deleteWorkoutSuccess = (data) => {
  console.log('deleteWorkoutSuccess invoked. Data is', data)
  $('#deleteWorkoutMessageModal').modal('show')
}

const deleteWorkoutFailure = (error) => {
  console.log('Delete workout failure. Error is', error)
  const modalName = '#deleteWorkoutModal' + error.workout.id
  $(modalName).modal('hide')
  $('#deleteWorkoutMessageTitle').text('Oops! There was an error')
  $('#deleteWorkoutMessageBody').text('Please try again later')
  $('#deleteWorkoutMessageModal').modal('show')
}

const clearWorkouts = () => {
  $('#workoutlist').empty()
}

module.exports = {
  addWorkoutSuccess,
  addWorkoutFailure,
  getWorkoutsSuccess,
  getWorkoutsFailure,
  editWorkoutSuccess,
  editWorkoutFailure,
  deleteWorkoutSuccess,
  deleteWorkoutFailure
}
