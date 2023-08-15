import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `
    <input type="text" [(ngModel)]="inputText" (input)="onInputChange()" (keypress)="onKeyPressEvent($event)">
  `,
  styles: []
})
export class TextInputComponent{

  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();

  onInputChange() {
    this.inputChange.emit(this.inputText);
  }

  onKeyPressEvent(event: KeyboardEvent) {
    if (event.key === ' ') {
      // Your code to execute when space is pressed
      console.log('Space key pressed!');
    }
  }

}
