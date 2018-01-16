import { AppComponent }  from './app.component';
import { CardComponent } from './card.component';
import { WelcomeComponent } from './welcome.component';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [ AppComponent, CardComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
