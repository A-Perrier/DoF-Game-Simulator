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

  addCard (card, source) {
    this[source].push(card)
    return this
  }

  /**
   * card param might be a single card or an array of cards
   * @param {object | Array} card 
   */
  addItem (card) {
    if (Array.isArray(card)) {
      card.forEach(item => this.hand.push(item))
    } else {
      this.hand.push(card)
    }
    return this
  }

  /**
   * card param might be a single card or an array of cards
   * @param {object | Array} card 
   */
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

  remove (card, source) {
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