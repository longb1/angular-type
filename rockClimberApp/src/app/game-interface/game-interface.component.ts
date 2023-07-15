import { Component } from '@angular/core';
import { GenerateQuoteService } from 'src/app/qenerate-quote.service';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent {
  constructor(private generateQuoteService : GenerateQuoteService) { }

  receivedInput!: string;
  typeThis!:string[];

  sendInput(text: string) {

    this.receivedInput = text;
  }

  triggerService() {
    this.generateQuoteService.getRandomQuote().subscribe((quote: string) => {
      this.typeThis = quote.split('')
    })
  }

}
