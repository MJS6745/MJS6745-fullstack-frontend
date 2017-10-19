'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui')

const addWorkout = (data) => {
  console.log('API create game is being invoked')
  console.log('Data being passed is ', data)
  return $.ajax({
    url: config.apiOrigin + '/workouts',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getWorkouts = () => {
  console.log('getWorkouts in API invoked')
  return $.ajax({
    url: config.apiOrigin + '/workouts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addWorkout,
  getWorkouts
}
