const { default: Bosses } = require("../../entity/Bosses");
const { default: ClassicEncounters } = require("../../entity/ClassicEncounters");
const { default: Hordes } = require("../../entity/Hordes");
const { default: Items } = require("../../entity/Items");

const initialState = { 
  encounters: new ClassicEncounters(),
  hordes: new Hordes(),
  bosses: new Bosses(),
  items: new Items()
}

export function manageDeck (state = initialState, action) {
  let nextState

  switch (action.type) {
    case 'INITIALIZATION':
      nextState = {
        ... state,
        encounters: encounters.shuffle(),
        hordes: hordes.shuffle(),
        bosses: bosses.shuffle(),
        items: items.shuffle
      }
      return nextState || state
      break;
  
    default:
      return state
      break;
  }
}