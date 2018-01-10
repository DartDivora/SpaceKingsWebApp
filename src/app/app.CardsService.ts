import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Card } from './card.object';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class CardsService {
    private _cardsURL = '../data/cards.json';

    constructor(private _http: Http) { }

    public getCards(): Observable<Card[]> {
        return this._http.get(this._cardsURL)
            .map((response: Response) => <Card[]>response.json())
            //.do(data => console.log("All: " +  JSON.stringify(data)))
            //.catch(this.handleError);
    }

    /*
    getProp(pageID: string): Observable<Card> {
        return this.getCards()
            .map((props: Card[]) => props.find(p => p. === pageID))
            //.do(data => console.log("Property JSON: " +  JSON.stringify(data)));
    }
    */

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
