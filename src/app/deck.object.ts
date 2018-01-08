import { Card } from "./card.object";

export class Deck {
  cards: Card[];

  constructor(newCards: Card[]) {
    this.cards = newCards;
  }
}
