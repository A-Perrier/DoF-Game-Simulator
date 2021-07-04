export default class Player {
  id
  name = ""
  hand = []
  encounters = []
  allies = []

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

  discard (card, source) {
    const index = this[source].indexOf(card)
    this[source].splice(index, 1)
    
    return this
  }

  switchToHand (card) {
    const index = this.encounters.indexOf(card)
    this.encounters.splice(index, 1)
    this.hand.push(card)

    return this
  }

  switchToAllies (card) {
    const index = this.encounters.indexOf(card)
    this.encounters.splice(index, 1)
    this.allies.push(card)

    return this
  }
}