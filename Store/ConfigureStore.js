import { createStore, combineReducers } from 'redux'
import { manageDeck } from './Reducers/gameDeckReducer'
import { managePlayers } from './Reducers/playersReducer'

export default createStore(combineReducers({manageDeck, managePlayers}))