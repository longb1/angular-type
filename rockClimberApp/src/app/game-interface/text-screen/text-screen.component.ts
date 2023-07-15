import { Component, Input,ViewChildren,QueryList,ElementRef, OnChanges } from '@angular/core';
@Component({
  selector: 'app-text-screen',
  template: `
  <div class="textScreen" #textScreen>
    <ng-container *ngFor="let char of textArray">
        <span [class]="isComplete">{{ char }}</span>
    </ng-container>
  </div>
  `,
  styles: [ `
    .textScreen {
      width: 700px;
      height: 200px;
      background-color: orange;
  }
  `]
})
export class TextScreenComponent implements OnChanges {

  @Input() userInput!: string;
  @Input() textArray?:string[];
  @ViewChildren('spans') allTexts?: QueryList<ElementRef>;
  
  public isComplete = "";

  ngOnChanges() {
    this.highlightMatchedChars();
  }
  
  highlightMatchedChars() {

    if (this.allTexts && this.allTexts.length > 0) {

      //break input down to character and store in array
      const userChar = this.userInput.split('');
      
      //get character from allTexts and store in array
      this.allTexts.forEach((textChar, index)=>{
        const inputChar = userChar[index]
        console.log("hello")
        if(inputChar==null){
          this.isComplete="" //no style
        } else if(inputChar===textChar.nativeElement.innerText){
          this.isComplete="yes"
        }else{
          this.isComplete="no"
        }
      })

    }

  }

}
