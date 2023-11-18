import { Injectable } from '@angular/core';
import { GenerateQuoteService } from 'src/app/services/generate-quote.service';
import { IQuoteObject } from '../models/quote-object';
import { StopwatchService } from 'src/app/services/stopwatch.service';


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
  
  public timerValue = '0:00';
  public isCountdownActive = false; //used to display countdown
  public countDownSeconds = 5;
  public gameInProgress = false;
  public wpmScore!: number | null;

  startGame() {
    this.countDownSeconds = 5;
    this.wpmScore = null;
    
    this.generateQuote()
    this.countDown()
  }


  countDown(){
    this.isCountdownActive = true;

    const gameCountdown = setInterval(() => {
      this.countDownSeconds--;
      if (this.countDownSeconds <= 0) {
        this.isCountdownActive = false;

        this.gameInProgress = true;

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

}
