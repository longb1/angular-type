import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `
    <input type="text" [(ngModel)]="inputText" (input)="emitUserInput()" (keypress)="onKeyPressEvent($event)">
  `,
  styles: []
})
export class TextInputComponent{

  inputText!: string;
  @Output() inputChange = new EventEmitter<string>();

  emitUserInput() {
    this.inputChange.emit(this.inputText);
  }

  onKeyPressEvent(event: KeyboardEvent) {
    if (event.key === ' ') {

      //convert to angular:
      const spanArray = quoteDisplayElement.querySelectorAll('span.incomplete')
      let currentWord = currentText.wordArray[currentText.arrayIndex] //get curent word (no spaces)
      const lastWord= currentText.wordArray[currentText.wordArray.length - 1]
      const userInput=quoteInputElement.value

      if(userInput == currentWord && userInput != lastWord){
          currentText.progressBar= move(currentText.progressBar,userInput,currentText.charArray)
          e.preventDefault();
          

          const completedChars= userInput.split("")
          for(let i=0;i<completedChars.length+1;i++){ //add 1 to length so it includes the space as well.
              spanArray[i].classList.remove("incomplete") //removes class off the first # of nodelist.
              spanArray[i].classList.add("correct")
          }

          currentText.arrayIndex++;
          //move to next word in array
          currentWord = currentText.wordArray[currentText.arrayIndex]
          console.log(`array index: ${currentText.arrayIndex}`)
          quoteInputElement.value=""

      }else if(userInput==lastWord){
          const elem = document.getElementById("racer");
          elem.style.width=`100%`
      }
    }
  }

}
