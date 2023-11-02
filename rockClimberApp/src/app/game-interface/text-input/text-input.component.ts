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

  public inputText!: string;
  public done = false;

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

      const isComplete = this.compareService.compare(this.quoteObject, this.inputText)
      this.done = isComplete
      this.inputText = '';
      if(isComplete){
        this.gameComplete.emit(true);
      }
      console.log(this.done)
    }
  }

}
