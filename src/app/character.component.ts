import { Component } from '@angular/core';

@Component({
  template: `
  <div>
  <form name ="characterSheet">
    <div class="form-group">
      <label for="name">Character Name:</label>
      <input type="text" class="form-control" name="Character Name" [(ngModel)]="characterName"><br>
      <label for="name">Player Name:</label>
      <input type="text" class="form-control" name="Player Name" [(ngModel)]="playerName"><br>
      <label for="name">Concept:</label>
      <input type="text" class="form-control" name="Concept" [(ngModel)]="concept"><br>
      <div class="form-row">
        <div class="form-group col-md-2">
            <label for="name">Brawn:</label>
            <input type="number" class="form-control" name="brawn" [(ngModel)]="brawn">
        </div>
        <div class="form-group col-md-2">
            <label for="name">Agility:</label>
            <input type="number" class="form-control" name="agility" [(ngModel)]="agility">
        </div>
        <div class="form-group col-md-2">
            <label for="name">Intelligence:</label>
            <input type="number" class="form-control" name="intelligence" [(ngModel)]="intelligence">
        </div>
        <div class="form-group col-md-2">
            <label for="name">Wit:</label>
            <input type="number" class="form-control" name="wit" [(ngModel)]="wit">
        </div>
        <div class="form-group col-md-2">
            <label for="name">Charm:</label> 
            <input type="number" class="form-control" name="charm" [(ngModel)]="charm">
        </div>
        <div class="form-group col-md-2">
            <label for="name">Presence:</label>
            <input type="number" class="form-control" name="presence" [(ngModel)]="presence">
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-success" (click)="saveSheet()">Save character sheet</button>
  </form>
  </div>`
})
export class CharacterSheetComponent {

    public saveSheet(): void {
        console.log("This will eventually do something!");
      }

}
