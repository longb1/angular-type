import { Injectable, OnInit } from '@angular/core';
import { GenerateQuoteService } from 'src/app/qenerate-quote.service';
import { IQuoteObject } from './quote-object';
import { StopwatchService } from 'src/app/stopwatch.service';


@Injectable({
  providedIn: 'root'
})
export class GameControllerService{

  constructor(
    private generateQuoteService : GenerateQuoteService,
    public StopwatchService : StopwatchService
    ) { }

  quoteObject: IQuoteObject = {
    quote: '',
    completed: ''
  };

  isCountdownActive = false;
  countDownSeconds = 5;
  gameInProgress = false;

  startGame() {
    this.gameInProgress = true;
    this.generateQuote()
    this.countDown()
    //when last word complete, put button back, stop timer, stop interval, record time - if auth'd , add ot account
  }


  countDown(){
    this.isCountdownActive = true;

    const gameCountdown = setInterval(() => {
      this.countDownSeconds--;
      if (this.countDownSeconds <= 0) {
        this.isCountdownActive = false;
        this.StopwatchService.start();
        clearInterval(gameCountdown);

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

  stopGame(){
    this.gameInProgress = false;
    this.StopwatchService.stop()
  }

  resetGame(){
    console.log("reset timer now")
  }

}