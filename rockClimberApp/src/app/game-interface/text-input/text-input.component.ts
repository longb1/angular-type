import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `
    <input type="text" [(ngModel)]="inputText" (input)="onInputChange()">
  `,
  styles: []
})
export class TextInputComponent{
  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();

  onInputChange() {
    this.inputChange.emit(this.inputText);
  }
}
