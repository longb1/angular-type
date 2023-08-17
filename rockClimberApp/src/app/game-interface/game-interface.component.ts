import { Component } from '@angular/core';
import { GenerateQuoteService } from 'src/app/qenerate-quote.service';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent {
  constructor(private generateQuoteService : GenerateQuoteService) { }

  receivedInput: string[] = [];
  displayText:string[] = [];
  currentWord?:string;
  wordArray:string[] = [];
  
  sendInput(text: string) {
    this.receivedInput = text.split('');
  }

  //two way between text-input to get current user input
  //compare with word array and dynamically set displayText for display component
  //first: get user input emitted to this component.
  compare(text:string){
    this.currentWord = text;
    //convert to angular:

  }
  getQuote() {
    this.generateQuoteService.getRandomQuote().subscribe((quote: string) => {
      this.displayText = quote.split('')
      this.wordArray = quote.split(' ')
    })
  }

}
