import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <nav class='navbar navbar-default' role = "navigation" >
            <div class='container-fluid'>
                <a class='navbar-brand' href="#">Space Kings Web App</a>
                <ul class='nav navbar-nav '>
                    <li><a routerLink="/card">Card</a></li>
                    <li><a routerLink="/welcome">Welcome</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {}
