export default class Player {
  name = ""
  hand = []
  encounters = []

  constructor (name) {
    this.name = name
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