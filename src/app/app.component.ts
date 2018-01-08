import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from './app.CardsService';
import { Deck } from './deck.object';
import { Card } from './card.object';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'my-app',
  template: `<h1>Hello, I am alive! </h1>
  <div *ngIf="cards">
  <button (click)="drawCard()">click me (cards left:{{this.cardsLeft}})</button>

    <div *ngIf="activeCard">
    You drew the {{activeCard.name}}
    </div>
  </div>`,
  providers: [CardsService]
})
export class AppComponent {
  private cards: Card[];
  private cardsLeft: number = 54;
  private activeCard: Card;

  constructor(private _cardService: CardsService) {
  }

  public drawCard(): Card {
    var cardNumber = Math.floor(Math.random() * this.cardsLeft);
    var card = this.cards[cardNumber];
    if (card) {
      this.activeCard = this.cards[cardNumber];
      delete this.cards[cardNumber];
      this.cardsLeft--;
    }
  }



  ngOnInit(): void {
    this._cardService.getCards().subscribe(
      cards =>
        this.cards = cards
    );
  }
}
}
