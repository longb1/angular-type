import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CompareService } from 'src/app/compare.service';
import { IQuoteObject } from 'src/app/quote-object';
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
  constructor(private compareService: CompareService) { }

  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();
  @Input() quoteObject!:IQuoteObject;
  @Input() fieldDisabled!: boolean;

  emitUserInput() {
    this.inputChange.emit(this.inputText);
  }

  compareInput(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
      if (this.compareService.compare(this.quoteObject, this.inputText) == 1){
        this.inputText = '';
      }
    }

    if(this.quoteObject.quote == this.quoteObject.completed){
      console.log('game complete')
    }
  }

}
