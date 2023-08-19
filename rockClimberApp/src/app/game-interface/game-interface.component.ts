import { Component } from '@angular/core';
import { GenerateQuoteService } from 'src/app/qenerate-quote.service';
import { IQuoteObject } from '../quote-object';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent {
  constructor(private generateQuoteService : GenerateQuoteService) { }

  receivedInput: string[] = [];
  quoteObject: IQuoteObject = {
    quote: '',
    indexProgress: 0,
    userProgress: ''
  };

  sendInput(text: string) {
    this.receivedInput = text.split('');
  }

  getQuote() {
    this.generateQuoteService.getRandomQuote().subscribe((quote: string) => {

      const quoteObject:IQuoteObject = {
        indexProgress: 0,
        userProgress: '',
        quote: quote
      };
  
      this.quoteObject = quoteObject;
    })
  }

}
