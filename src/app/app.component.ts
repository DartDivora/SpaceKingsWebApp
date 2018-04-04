import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" role = "navigation" >
        <div class='container-fluid'>
            <a class='navbar-brand' href="#">Space Kings Web App</a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a class="nav-link" routerLink="/welcome">Welcome</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/card">Card</a></li>
            </ul>
        </div>
    </nav>
    <br><br><br>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>
 </div>
    `
})
export class AppComponent {}
