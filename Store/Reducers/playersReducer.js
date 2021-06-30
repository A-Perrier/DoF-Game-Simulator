import Player from "../../entity/Player"

const initialState = { players: [] }

export function managePlayers ( state = initialState, action ) {
  let nextState

  switch (action.type) {
    case 'PLAYERS_INITIALIZATION':
      let players = []
      
      action.value.map(playerName => {
        players.push(new Player(playerName))

        // On va gérer les pioches initiales ici, il nous faudra aussi le nombre de rounds
      })

      nextState = {
        ...state,
        players
      }

      return nextState || state
      break;
  
    default:
      return state
      break;
  }
}