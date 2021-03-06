export default class Deck {
  cards = []

  shuffle () {
    let j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    return this;
  }

  draw (num = 1) {
    const cards = []

    for (let i = 0; i < num; i++) {
      cards.push(this.cards[0])
      this.cards.shift()
    }

    return cards
  }


  removeMulti () {
    let filtered = this.cards.filter(card => card.multiplayer !== true)
    this.cards = filtered

    return this
  }
}