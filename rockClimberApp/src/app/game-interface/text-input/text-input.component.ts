import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `
    <input type="text" [(ngModel)]="inputText" (input)="emitUserInput()">
  `,
  styles: []
})
export class TextInputComponent{

  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();

  emitUserInput() {
    this.inputChange.emit(this.inputText);
  }


}
