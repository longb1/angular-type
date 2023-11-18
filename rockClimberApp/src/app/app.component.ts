import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <app-game-interface></app-game-interface>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Typeracer';

}
