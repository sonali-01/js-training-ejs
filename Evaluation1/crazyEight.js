class card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
  toString() {
    this.ranks = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    return this.ranks[this.rank] + " of " + this.suits[this.suit];
  }
  equals(that) {
    return this.rank == that.rank && this.suit == that.suit;
  }
}
class cardCollection {
  constructor(label) {
    this.label = label;
    this.cards = new card();
  }
  size() {
    return this.cards.length();
  }
  getCards(i) {
    return this.cards.get(i);
  }
  popCard() {
    let i = size() - 1;
    return popCard(i);
  }
  deal(cardCollection, n) {
    for (let i = 0; i < n; i++) {
      this.card = popCard();
      cardCollection.addCard(this.card);
    }
  }

  shuffle() {
    let r;
    let temp;
    for (let i = 0; i < this.length; i++) {
      r = Math.floor(Math.random() * 51);
      temp = this.array[i];
      this.array[i] = this.array[r];
      this.array[r] = temp;
    }
    return this.array;
  }
}
class deck extends cardCollection {
  constructor(label) {
    super(label);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; i < 12; j++) {
        this.cards.push(new card(i, j));
      }
    }
  }
}

class hand extends cardCollection {
  constructor(label) {
    super(label);
  }
  display() {
    for (let i = 0; i < size(); i++) {
      console.log(getCard(i));
    }
  }
}
