import { Component } from '@angular/core';
import { GenerateQuoteService } from 'src/app/qenerate-quote.service';
import { IQuoteObject } from '../quote-object';
import { StopwatchService } from 'src/app/stopwatch.service';
import { Subscription } from 'rxjs';


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

  interval: any;
  time = new Date();

  sendInput(text: string) {
    this.receivedInput = text.split('');
  }

  startGame() {
    this.generateQuoteService.getRandomQuote().subscribe((quote: string) => {

      const quoteObject:IQuoteObject = {
        completed: '',
        quote: quote
      };
  
      this.quoteObject = quoteObject;
    })

    //integrate count down before starting game
    //then, start stop watch and interval only once before blanking out button
    this.StopwatchService.start()
    this.interval=setInterval(() => {
      this.time.setSeconds(this.time.getSeconds()+1);
    }, 1000);

    //when last word complete, put button back, stop timer, stop interval, record time - if auth'd , add ot account
  }

}
