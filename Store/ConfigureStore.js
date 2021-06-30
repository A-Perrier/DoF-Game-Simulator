import { createStore, combineReducers } from 'redux'
import { manageDeck } from './Reducers/gameDeck'

export default createStore(manageDeck)