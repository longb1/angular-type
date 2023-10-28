import { Component } from '@angular/core';
import { StopwatchService } from 'src/app/stopwatch.service';

import { GameControllerService } from '../game-controller.service';
@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent {
  constructor(
    public GameControllerService : GameControllerService,
    public StopwatchService : StopwatchService
    ) { }
  timerValue: string = '0:00';
  receivedInput: string[] = [];
  ngOnInit() {
    this.StopwatchService.getTimer().subscribe(time => {
      this.timerValue = time;
    });
  }
  sendToDisplay(text: string) {
    this.receivedInput = text.split('');
  }

  startGame() {
    this.GameControllerService.resetGame()
    this.GameControllerService.startGame()
  }



  finish(){
    this.GameControllerService.stopGame()
  }


}
