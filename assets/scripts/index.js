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
  workoutEvents.addHandlers()
  apiEvents.addHandlers()
  // Handler for the modal form submissions
  // $('#editModal').on('show.bs.modal', function (event) {
  //   const button = $(event.relatedTarget) // Button that triggered the modal
  //   const workout = button.data('resourceid') // Extract info from data-* attributes
  //   Need to create additional items here to grab the remaining data elements so they can be passed into the correct portion of the form (ex. date, duration, etc.)
  //   If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //   Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //   const modal = $(this)
  //   modal.find('.modal-title').text('Altering workout ' + workout)
  //   modal.find('.modal-body input').val(workout)
  //   modal.find('.modal-body #workoutDescription').text('Hey this is the description for workout ' + workout)
  // })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
