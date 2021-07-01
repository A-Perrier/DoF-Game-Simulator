import { createStore, combineReducers } from 'redux'
import { manageGame } from './Reducers/gameDeckReducer'
import { managePlayers } from './Reducers/playersReducer'

export default createStore(
  manageGame,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
//export default createStore(combineReducers({manageGame, managePlayers}))