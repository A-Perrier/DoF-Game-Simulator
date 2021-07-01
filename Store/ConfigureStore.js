import { createStore } from 'redux'
import { manageGame } from './Reducers/gameReducer'

export default createStore(
  manageGame,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)