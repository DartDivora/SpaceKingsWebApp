import { Card } from "./card.object";

export class Deck {
  cards: Card[];

  constructor(newCards: Card[]) {
    this.cards = newCards;
  }

  public getRemainingCards(): number {
    return this.cards.length;
  }

  public drawCard(): Card {
    var cardNumber = Math.floor(Math.random() * this.cards.length);
    var card = this.cards[cardNumber];
    //console.log(card.value + " of " + card.suit);
    delete this.cards[cardNumber];
    return card;
  }
}
