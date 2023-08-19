import { Component, Output, EventEmitter } from '@angular/core';
import { CompareService } from 'src/app/compare.service';

@Component({
  selector: 'app-text-input',
  template: `
    <input type="text" [(ngModel)]="inputText" (input)="emitUserInput()">
  `,
  styles: []
})
export class TextInputComponent{
  constructor(private CompareService: CompareService) { }
  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();

  emitUserInput() {
    this.inputChange.emit(this.inputText);
  }


}
