import { Component, Input } from '@angular/core';
import { IQuoteObject } from 'src/app/quote-object';
@Component({
  selector: 'app-text-screen',
  template: `

  <div class="textScreen" #textScreen>
    <span
      *ngFor="let char of quoteObject?.quote?.split(''); let index = index"
      [ngClass]="applyClassLogic(index, char)"
    >{{ char }}</span>
  </div>
  `,
  styles: [ `
    .textScreen {
      width: 700px;
      height: 200px;
      background-color: orange;
  }
  `]
})
export class TextScreenComponent{

  @Input() userInput!: string[];
  @Input() quoteObject?:IQuoteObject;


  applyClassLogic(index: number, char: string): string{
    if (!this.userInput[index]) {
      return 'incomplete';
    } else if (this.userInput[index] && this.userInput[index] !== char) {
      return 'incorrect';
    } else if (this.userInput[index] === char) {
      return 'correct';
    }
    return 'poo'
  }
}
