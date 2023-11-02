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

  public quoteObject: IQuoteObject = {
    quote: '',
    completed: ''
  };

  public isCountdownActive = false;
  public countDownSeconds = 5;
  public gameInProgress = false;
  public wpmScore!: number | null;

  startGame() {
    this.countDownSeconds = 5;
    this.wpmScore = null;
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

  completeGame(){
    this.gameInProgress = false;
    this.StopwatchService.stop()

    //WPM logic (extract into service soon)
    const allLetters = this.quoteObject.completed.split("").length;
    const finishTimeMilliSecs= this.StopwatchService.getFinishTime()
    const timeInMinutes: number = finishTimeMilliSecs / 60000; // 1 minute = 60000 milliseconds
    this.wpmScore = (allLetters / 5)/timeInMinutes;
        

  }

  resetGame(){
    console.log("reset timer now")
  }

}
