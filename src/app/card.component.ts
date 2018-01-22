import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from './app.CardsService';
import { Deck } from './deck.object';
import { Card } from './card.object';
import { stringify } from '@angular/core/src/util';

@Component({
  template: `
  <div *ngIf="cards">
  <form name ="drawCards">
    <div class="form-group">
      <label for="name">Character Name:</label>
      <input type="text" class="form-control" name="Character Name" [(ngModel)]="characterName"><br>
      <label for="name">Player Name:</label>
      <input type="text" class="form-control" name="Player Name" [(ngModel)]="playerName"><br>
      <label for="name">Concept:</label>
      <input type="text" class="form-control" name="Concept" [(ngModel)]="concept"><br>
      <input type="number" class="form-control" name="brawn" [(ngModel)]="brawn"><br>
      <label for="name">Agility:</label>
      <input type="number" class="form-control" name="agility" [(ngModel)]="agility"><br>
      <label for="name">Intelligence:</label>
      <input type="number" class="form-control" name="intelligence" [(ngModel)]="intelligence"><br>
      <label for="name">Wit:</label>
      <input type="number" class="form-control" name="wit" [(ngModel)]="wit"><br>
      <label for="name">Charm:</label>
      <input type="number" class="form-control" name="charm" [(ngModel)]="charm"><br>
      <label for="name">Presence:</label>
      <input type="number" class="form-control" name="presence" [(ngModel)]="presence"><br>
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
export class CardComponent {
  private cards: Card[];
  private drawnCards: Card[] = [];
  private cardsLeft: number = 54;
  private resultString: string;
  private cardsToDraw: number = 0;
  private successes: number = 0;
  private failures: number = 0;
  private characterName: string = "Something";

  constructor(private _cardService: CardsService) {
  }

  public drawCard(): void {
    this.resultString = "";
    this.successes = 0;
    this.failures = 0;
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
      console.log(this.resultString)
    }


  public checkCard(card: Card): void{
    console.log(card.value);
    switch (card.value) {
        case 'JACK':
        case 'QUEEN':
        case 'KING':
        case 'ACE':
            this.successes++;
            console.log("Increasing Successes by 1!");
            break;
        case 'JOKER':
            this.failures++;
            console.log("Increasing Failures by 1!");
            break;
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
