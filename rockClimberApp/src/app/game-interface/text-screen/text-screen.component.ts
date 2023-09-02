import { Component, Input } from '@angular/core';
import { IQuoteObject } from 'src/app/quote-object';
import { StopwatchService } from 'src/app/stopwatch.service';
@Component({
  selector: 'app-text-screen',
  template: `

  <div class="textScreen" #textScreen>
    <span
      *ngFor="let char of quoteObject?.completed?.split('')"
      [ngClass]="'correct'"
    >{{ char }}</span>
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
  constructor(private StopwatchService : StopwatchService) { }

  getProcessedCharacters(): string[] {
    if (this.quoteObject?.quote) {
      return this.quoteObject.completed.split('');
    }
    return [];
  }

  applyClassLogic(index: number, char: string): string{
    if (!this.userInput[index]) {
      return 'incomplete';
    } else if (this.userInput[index] && this.userInput[index] !== char) {
      return 'incorrect';
    } else if (this.userInput[index] === char) {
      return 'correct';
    }
    return 'nothing'
  }
}
