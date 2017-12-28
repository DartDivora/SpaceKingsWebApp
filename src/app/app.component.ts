import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from './app.CardsService';
import { Deck } from './deck.object';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'my-app',
  template: `<h1>Hello, I am alive!</h1>`,
  providers: [CardsService]
})
export class AppComponent {
  public deck: Deck = new Deck();
  public _cardService: CardsService;

  constructor(_cardService: CardsService) {
    this._cardService = _cardService
  }

  ngOnInit(): void {
    this._cardService.getCards().subscribe(
      cards => this.deck.cards = cards
    );
  }
}
