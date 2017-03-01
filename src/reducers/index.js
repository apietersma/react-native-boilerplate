/**
 * # reducers
 *
 * This class combines all the reducers into one
 *
 */
'use strict'
/**
 * ## Import your reducers here
 */
import example from './exampleReducer'

import { combineReducers } from 'redux'

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
  example
})

export default rootReducer
