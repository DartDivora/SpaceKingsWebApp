import { Component } from '@angular/core';
import { CharacterSheet } from './charactersheet.object';

@Component({
  template: `
  <div>
  <form name ="characterSheet" (ngSubmit)="saveSheet()" ngNativeValidate>
    <b>Basic Information:</b><br><br>
    <div class="form-group">
      <label for="name">Character Name:</label>
      <input type="text" class="form-control" name="Character Name" [(ngModel)]="stats.characterName" required><br>
      <label for="name">Player Name:</label>
      <input type="text" class="form-control" name="Player Name" [(ngModel)]="stats.playerName" required><br>
      <label for="name">Concept:</label>
      <input type="text" class="form-control" name="Concept" [(ngModel)]="stats.concept" required><br>
      <label for="name">Race:</label>
      <input type="text" class="form-control" name="Race" [(ngModel)]="stats.race" required><br>    
      <label for="name">Planet:</label>
      <input type="text" class="form-control" name="Planet" [(ngModel)]="stats.planet" required><br>    
      
      <b>Attributes (score of one to four, seven points to spend):</b><br><br>
      <div class="form-row">
        <div class="form-group col-md-2">
            <label for="name">Brawn:</label>
            <input type="number" min="1" max="4" class="form-control" name="brawn" [(ngModel)]="stats.brawn" required>
        </div>
        <div class="form-group col-md-2">
            <label for="name">Agility:</label>
            <input type="number" min="1" max="4" class="form-control" name="agility" [(ngModel)]="stats.agility" required>
        </div>
        <div class="form-group col-md-2">
            <label for="name">Intelligence:</label>
            <input type="number" min="1" max="4" class="form-control" name="intelligence" [(ngModel)]="stats.intelligence" required>
        </div>
        <div class="form-group col-md-2">
            <label for="name">Wit:</label>
            <input type="number" min="1" max="4" class="form-control" name="wit" [(ngModel)]="stats.wit" required>
        </div>
        <div class="form-group col-md-2">
            <label for="name">Charm:</label> 
            <input type="number" min="1" max="4" class="form-control" name="charm" [(ngModel)]="stats.charm" required>
        </div>
        <div class="form-group col-md-2">
            <label for="name">Presence:</label>
            <input type="number" min="1" max="4" class="form-control" name="presence" [(ngModel)]="stats.presence" required>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-success">Save character sheet</button>
  </form>
  </div>`
})
export class CharacterSheetComponent {

    stats = new CharacterSheet();

    public saveSheet(): void {
        
        console.log(JSON.stringify(this.stats));
        
      }

}
