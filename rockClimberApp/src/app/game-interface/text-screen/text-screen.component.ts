import { Component, Input } from '@angular/core';
import { IQuoteObject } from 'src/app/quote-object';
@Component({
  selector: 'app-text-screen',
  template: `
  <div class="textScreen" #textScreen>
    <span
      *ngFor="let char of quoteObject?.charArray; let index = index"
      [class.incomplete]="!userInput[index]"
      [class.incorrect]="userInput[index] && userInput[index] !== char"
      [class.correct]="userInput[index] === char"
    >{{char}}</span>
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

}
