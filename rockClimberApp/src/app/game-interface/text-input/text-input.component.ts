import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `
    <input type="text" [(ngModel)]="inputText" (input)="emitUserInput()" (keypress)="emitWord($event)">
  `,
  styles: []
})
export class TextInputComponent{

  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();
  @Output() wordToCompare = new EventEmitter<string>();

  emitUserInput() {
    this.inputChange.emit(this.inputText);
  }

  emitWord(event: KeyboardEvent) {
    if (event.key === ' ') {
      const word: string = this.inputText;
      this.inputText = '';
      this.wordToCompare.emit(word);
    }
  }

}
