import { Component } from '@angular/core';

import { GameControllerService } from '../game-controller.service';
@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent {
  constructor(
    public GameControllerService : GameControllerService
    ) { }

  receivedInput: string[] = [];

  sendToDisplay(text: string) {
    this.receivedInput = text.split('');
  }

  startGame() {
    this.GameControllerService.startGame()
  }

  finish(){
    this.GameControllerService.stopGame()
  }

}
