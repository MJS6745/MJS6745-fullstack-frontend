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
  // const modalName = '#editWorkoutModal' + error.workout.id
  // $(modalName).modal('hide')
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
  $('#deleteWorkoutMessageTitle').text('Oops! There was an error')
  $('#deleteWorkoutMessageBody').text('Please try again later')
  $('#deleteWorkoutMessageModal').modal('show')
}

const clearWorkouts = () => {
  $('#workoutlist').empty()
}

const clearAnalysisData = () => {
  console.log('Clear analysis data invoked')
  $('#analysistable').empty()
}

const analyzeWorkoutSuccess = (data) => {
  $('#analyzeWorkoutsModal').modal('hide')
  console.log('analyzeWorkoutSuccess invoked')
  console.log('Get workout success invoked. Data is', data)
  // This gathers the different workout times a user has
  const workoutTypes = []
  for (let i = 0; i < data.workouts.length; i++) {
    workoutTypes.push(data.workouts[i].workout_time)
  }
  console.log('Workout types are', workoutTypes)
  // This will create an array of just the unique workout times
  const uniqueWorkoutTypes = Array.from(new Set(workoutTypes))
  console.log('Unique workout types are', uniqueWorkoutTypes)
  // This will loop through all the workouts and calculate info for each
  // workout time that is then presented on the workout analysis
  uniqueWorkoutTypes.forEach((workoutTime) => {
    let workoutNum = 0
    let avgDuration = 0
    let avgDifficulty = 0
    for (let i = 0; i < data.workouts.length; i++) {
      if (data.workouts[i].workout_time === workoutTime) {
        workoutNum += 1
        avgDuration += data.workouts[i].duration
        avgDifficulty += data.workouts[i].difficulty
      }
    }
    console.log('Workout number for', workoutTime, 'is', workoutNum)
    console.log('Workout duration for', workoutTime, 'is', avgDuration)
    console.log('Workout difficulty for', workoutTime, 'is', avgDifficulty)
    avgDuration = (avgDuration / workoutNum).toFixed(2)
    avgDifficulty = (avgDifficulty / workoutNum).toFixed(2)
    $('#workoutanalysis').append('<tr><td>' + workoutTime + '</td><td>' + workoutNum + '</td><td>' + avgDuration + '</td><td>' + avgDifficulty + '</td></tr>')
  })
  $('#analyzeWorkoutsMessageModal').modal('show').on('hidden.bs.modal', clearAnalysisData)
}

module.exports = {
  addWorkoutSuccess,
  addWorkoutFailure,
  getWorkoutsSuccess,
  getWorkoutsFailure,
  editWorkoutSuccess,
  editWorkoutFailure,
  deleteWorkoutSuccess,
  deleteWorkoutFailure,
  clearWorkouts,
  analyzeWorkoutSuccess
}
