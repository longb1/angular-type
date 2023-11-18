import { Component, Output, Input, EventEmitter } from '@angular/core';
import { IQuoteObject } from 'src/app/models/quote-object';
@Component({
  selector: 'app-text-input',
  template: `
    <input 
      type="text" 
      [(ngModel)]="inputText" 
      (input)="emitUserInput()" 
      (keypress)="compareInput($event)"
      [disabled]="fieldDisabled"
    >
  `,
  styles: []
})
export class TextInputComponent{

  public inputText!: string;

  @Input() quoteObject!:IQuoteObject;
  @Input() fieldDisabled!: boolean;
  @Output() inputChange = new EventEmitter<string>();
  @Output() gameComplete = new EventEmitter();

  emitUserInput() {
    this.inputChange.emit(this.inputText);
  }

  compareInput(event: KeyboardEvent) {

    if (event.key === ' ') {
      event.preventDefault();

      const usersWord = this.inputText
      const wordArray = this.quoteObject.quote.split(' ')
      const currentWord = wordArray[0]
      const finalWord = wordArray[wordArray.length - 1];
  
      if(usersWord == currentWord){
        this.quoteObject.completed+=usersWord+' '
        wordArray.shift()
        this.quoteObject.quote = wordArray.join(' ')
  
            
        if (currentWord == finalWord){
          this.gameComplete.emit(true);
        }

        this.inputText = '';
      }
  
      
    }
  }

}
