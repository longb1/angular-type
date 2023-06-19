import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent{
  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();

  onInputChange() {
    this.inputChange.emit(this.inputText);
  }
}
