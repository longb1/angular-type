import { Component } from '@angular/core';
import { GenerateQuoteService } from 'src/app/qenerate-quote.service';
import { IQuoteObject } from '../quote-object';
import { StopwatchService } from 'src/app/stopwatch.service';


@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent {
  constructor(
    private generateQuoteService : GenerateQuoteService,
    private StopwatchService : StopwatchService
    ) { }

  receivedInput: string[] = [];
  quoteObject: IQuoteObject = {
    quote: '',
    completed: ''
  };
  isCountdownActive = false;
  countDownSeconds = 5;

  gameStarted = false;
  time = new Date(0);

  sendInput(text: string) {
    this.receivedInput = text.split('');
  }

  startGame() {
    this.gameStarted = true;
    this.generateQuote()
    this.countDown()
    this.startTimer()
    //then, start stop watch and interval only once before blanking out button

    //when last word complete, put button back, stop timer, stop interval, record time - if auth'd , add ot account
  }


  countDown(){
    this.isCountdownActive = true;

    const gameCountdown = setInterval(() => {
      this.countDownSeconds--;
      if (this.countDownSeconds <= 0) {
        this.isCountdownActive = false;
        clearInterval( gameCountdown);
      }
    }, 1000);

  }
  
  generateQuote(){
    this.generateQuoteService.getRandomQuote().subscribe((quote: string) => {

      const quoteObject:IQuoteObject = {
        completed: '',
        quote: quote
      };
  
      this.quoteObject = quoteObject;
    })
  }

  startTimer(){
    this.StopwatchService.start()

    const interval=setInterval(() => {
      this.time.setSeconds(this.time.getSeconds()+1);
    }, 1000);
  }

}
