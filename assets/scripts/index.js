'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const workoutEvents = require('./workout/events')
const apiEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

// Handlers being invoked from other areas of application
$(() => {
  $('#changePasswordButton').hide()
  $('#signOutButton').hide()
  $('#addWorkoutButton').hide()
  $('#getWorkoutsButton').hide()
  $('#analyzeWorkoutsButton').hide()
  workoutEvents.addHandlers()
  apiEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
