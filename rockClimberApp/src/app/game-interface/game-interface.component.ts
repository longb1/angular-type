import { Component } from '@angular/core';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent {

  receivedInput!: string;

  sendInput(text: string) {

    this.receivedInput = text;
  }

}
