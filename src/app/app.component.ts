import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from './app.CardsService';
import { Deck } from './deck.object';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'my-app',
  template: `<h1>Hello, I am alive! </h1>
  <button (click)="drawCard()">click me</button>
  <div *ngIf="deck"> hey
    <div *ngFor=" let card of deck.cards" class="mdl-cell mdl-cell--4-col">
      {{card.value}},{{card.suit}}
    </div>
  </div>`,
  providers: [CardsService]
})
export class AppComponent {
  private deck: Deck;

  constructor(private _cardService: CardsService) {
  }

  drawCard(): void{
    this.deck.drawCard()
  }

  getRemainingCards(): void {
    console.log(this.deck.getRemainingCards())
  }

  ngOnInit(): void {
    this._cardService.getCards().subscribe(
      cards =>
        this.deck = new Deck(cards)
    );
  }
}
