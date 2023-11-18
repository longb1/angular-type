import { Component } from '@angular/core';
import { StopwatchService } from 'src/app/services/stopwatch.service';

import { GameControllerService } from '../../services/game-controller.service';
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
  public timerValue = '0:00';
  public receivedInput: string[] = [];
  
  ngOnInit() {
    this.StopwatchService.getTimer().subscribe(time => {
      this.timerValue = time;
    });
  }
  sendToDisplay(text: string) {
    this.receivedInput = text.split('');
  }

  startGame() {
    this.GameControllerService.startGame()
  }

  finish(){
    this.GameControllerService.completeGame()
  }


}
