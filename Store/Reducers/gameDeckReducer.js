import Player from "../../entity/Player";

const { default: Bosses } = require("../../entity/Bosses");
const { default: ClassicEncounters } = require("../../entity/ClassicEncounters");
const { default: Hordes } = require("../../entity/Hordes");
const { default: Items } = require("../../entity/Items");

const initialState = { 
  encounters: new ClassicEncounters(),
  hordes: new Hordes(),
  bosses: new Bosses(),
  items: new Items(),
  players: []
}

export function manageGame (state = initialState, action) {
  let nextState
  
  switch (action.type) {
    case 'GAME_INITIALIZATION':
      // On a besoin d'une copie qu'on pourra modifier lors du draw sans altérer le state d'origine
      let middleState = {
        encounters: state.encounters.shuffle(),
        hordes: state.hordes.shuffle(),
        bosses: state.bosses.shuffle(),
        items: state.items.shuffle()
      }


      // Phase de création des joueurs et pioche initiale
      let players = []
      const regularEncounters = action.value.rounds - 2

      action.value.playersFromApp.map(playerName => {
        let player = new Player(playerName)

        player.addItem(middleState.items.draw(2))
              .addEncounters(middleState.encounters.draw(regularEncounters))
              .addEncounters(middleState.hordes.draw())
              .addEncounters(middleState.bosses.draw())

        players.push(player)
      })


      // Injection du nouveau state avec les cartes mélangées et supprimées par les draws
      nextState = {
        ... state,
        encounters: middleState.encounters,
        hordes: middleState.hordes,
        bosses: middleState.bosses,
        items: middleState.items,
        players: players
      }

      return nextState || state
      break;
  
    default:
      return state
      break;
  }
}