import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from './app.CardsService';
import { Deck } from './deck.object';
import { Card } from './card.object';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'my-app',
  template: `<h1>Hello, I am alive! </h1>
  <div *ngIf="deck">
  <button (click)="drawCard()">click me (cards left:{{this.cardsLeft}})</button>

    <div *ngIf="activeCard"><div *ngIf="activeCardName">
    You drew {{activeCardName}}
    </div></div>
  </div>`,
  providers: [CardsService]
})
export class AppComponent {
  private deck: Deck;
  private cardsLeft: number  = 54;
  private activeCard: Card;
  private activeCardName: string = "";

  constructor(private _cardService: CardsService) {
  }

  drawCard(): void {
    this.activeCard = this.deck.drawCard();
    this.cardsLeft--;
  }

  ngOnInit(): void {
    this._cardService.getCards().subscribe(
      cards =>
        this.deck = new Deck(cards)
    );
  }
}
