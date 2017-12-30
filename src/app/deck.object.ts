import { Card } from "./card.object";

export class Deck {
    cards: Card[];

    constructor(newCards: Card[]){
      this.cards = newCards
    }

    public getRemainingCards(): number{
      return this.cards.length
    }

    public drawCard(): void{
      //card = this.cards[Math.floor(Math.random()*this.cards.length)];
      //console.log(card.value + " of " + card.suit);
    }
}
