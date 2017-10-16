'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const editWorkout = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Edit workout form data is ', data)
}

const addHandlers = () => {
  $('#editWorkoutForm').on('submit', editWorkout)
}

module.exports = {
  addHandlers
}
