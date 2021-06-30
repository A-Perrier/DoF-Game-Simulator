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
    return this.cards;
  }

  draw () {
    return this.cards[0]
  }
}