export class Card {
    value: string;
    suit: string;
    image: string;
    name: string;

    public setName(): void{
      if(this.suit != "NONE"){
        this.name = this.value + " of " + this.suit;
      }
      else{
        this.name = this.name = this.value;
      }
    }
}
