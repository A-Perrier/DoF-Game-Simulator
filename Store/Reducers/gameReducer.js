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
  players: [],
  rounds: 5
}

export function manageGame (state = initialState, action) {
  let nextState
  let currentPlayer
  let playersCopy
  
  switch (action.type) {
    case 'GAME_INITIALIZATION':
      // On a besoin d'une copie qu'on pourra modifier lors du draw sans altérer le state d'origine
      let middleState = {
        encounters: state.encounters.shuffle(),
        hordes: state.hordes.shuffle(),
        bosses: state.bosses.shuffle(),
        items: state.items.shuffle()
      }


      if (action.value.playersFromApp.length === 1) {
        middleState.encounters.removeMulti()
        middleState.items.removeMulti()
      }

      // Phase de création des joueurs et pioche initiale
      let players = []
      const regularEncounters = action.value.roundsFromApp - 2

      action.value.playersFromApp.map((playerName, index) => {
        let player = new Player(playerName, index)

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
        players: players,
        rounds: action.value.roundsFromApp
      }

      return nextState || state
      break;
  

    case 'DRAW_ITEM':
      currentPlayer = action.value
      playersCopy = state.players.slice()
      middleState = {
        items: state.items
      }

      playersCopy.map(player => {
        if (player === currentPlayer) {
          player.addItem(middleState.items.draw())
        }
      })

      nextState = {
        ... state,
        items: middleState.items,
        players: playersCopy
      }

      return nextState || state
      break;


    case 'DISCARD':
      currentPlayer = action.value.player
      let card = action.value.card
      let source = action.value.source

      playersCopy = state.players.slice()
      playersCopy.map(player => {
        if (player === currentPlayer) {
          player.discard(card, source)
        }
      })

      nextState = {
        ... state,
        players: playersCopy
      }
      return nextState || state


    case 'SWITCH_TO_HAND':
      currentPlayer = action.value.player
      card = action.value.card

      playersCopy = state.players.slice()
      playersCopy.map(player => {
        if (player === currentPlayer) {
          player.switchToHand(card)
        }
      })

      nextState = {
        ... state,
        players: playersCopy
      }
      return nextState || state

      
    case 'SWITCH_TO_ALLIES':
      currentPlayer = action.value.player
      card = action.value.card

      playersCopy = state.players.slice()
      playersCopy.map(player => {
        if (player === currentPlayer) {
          player.switchToAllies(card)
        }
      })

      nextState = {
        ... state,
        players: playersCopy
      }
      return nextState || state

    default:
      return state
      break;
  }
}