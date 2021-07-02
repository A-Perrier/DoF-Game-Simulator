export default class Player {
  id
  name = ""
  hand = []
  encounters = []

  constructor (name, id) {
    this.name = name
    this.id = id
  }

  addItem (card) {
    if (Array.isArray(card)) {
      card.forEach(item => this.hand.push(item))
    } else {
      this.hand.push(card)
    }
    return this
  }

  addEncounters (card) {
    if (Array.isArray(card)) {
      card.forEach(item => this.encounters.push(item))
    } else {
      this.encounters.push(card)
    }
    return this
  }
}