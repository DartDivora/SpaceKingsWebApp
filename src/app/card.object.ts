export class Card {
    public value: string;
    public suit: string;
    public image: string;
    public name: string;

    public setName(): void{
      if(this.suit != "NONE"){
        this.name = this.value + " of " + this.suit;
      }
      else{
        this.name = this.name = this.value;
      }
    }
}
