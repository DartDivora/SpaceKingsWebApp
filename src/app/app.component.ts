import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from './app.CardsService';
import { Deck } from './deck.object';
import { Card } from './card.object';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to the Space Kings Web App!</h1>
  <div *ngIf="cards">
  <form name ="drawCards">
    <div class="form-group">
      <label for="name">Number of cards to draw</label>
      <input type="number" class="form-control" name="cardsToDraw" [(ngModel)]="cardsToDraw" required>
    </div>
    <button type="submit" class="btn btn-success" (click)="drawCard()">Submit</button>
  </form>
  <button type="submit" class="btn btn-success" (click)="loadDeck()">Reload Deck</button>
  <br>
  Remaining cards: {{this.cards.length}}
    <div *ngIf="resultString">
    {{resultString}}
    </div>
    <div *ngFor=" let card of drawnCards" class="mdl-cell mdl-cell--4-col">
          {{card.name}}
        </div>
  </div>`,
  providers: [CardsService]
})
export class AppComponent {
  private cards: Card[];
  private drawnCards: Card[] = [];
  private cardsLeft: number = 54;
  private resultString: string;
  private cardsToDraw: number = 0;
  private successes: number = 0;
  private failures: number = 0;

  constructor(private _cardService: CardsService) {
  }

  public drawCard(): void {
    this.resultString = "";
    this.drawnCards = [];
    if (this.cardsToDraw < 1) {
      this.resultString = "Cannot draw less than one card, son!";
      return;
    }
    else if (this.cardsToDraw > this.cards.length) {
      this.resultString = "You only have " + this.cards.length + " cards left!";
      return;
    }
    for (var i = 0; i < this.cardsToDraw; i++) {
      var cardNumber = Math.floor(Math.random() * this.cardsLeft);
      var card = this.cards[cardNumber];
      if (card) {
        this.drawnCards.push(card);
        this.cards.splice(cardNumber, 1);
        this.cardsLeft = this.cards.length;
        this.checkCard(card);
        }
      }
      this.resultString += "Sucesses: " + this.successes;
      this.resultString += " Failures: " + this.failures;
      this.resultString += " You drew:";
    }


  public checkCard(card: Card): void{
    switch (card.suit) {
        case 'JACK':
        case 'QUEEN':
        case 'KING':
        case 'ACE':
            this.successes++;
            break;
        case 'JOKER':
            this.failures++;
    }
  }

  public loadDeck(): void {
    this._cardService.getCards().subscribe(
      cards =>
        this.cards = cards
    );
    this.drawnCards = [];
    this.resultString = "";
  }


  ngOnInit(): void {
    this.loadDeck();
  }
}
