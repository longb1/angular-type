import { Component, Input,ViewChildren,QueryList,ElementRef, OnChanges } from '@angular/core';
@Component({
  selector: 'app-text-screen',
  templateUrl: './text-screen.component.html',
  styleUrls: ['./text-screen.component.scss']
})
export class TextScreenComponent implements OnChanges {

  @Input() userInput!: string;
  @Input() text!:string;
  @ViewChildren('textScreen') allTexts!: QueryList<ElementRef>;
  
  ngOnChanges() {
    this.highlightMatchedChars();
  }
  
  highlightMatchedChars() {
    if (this.allTexts && this.allTexts.length > 0) {
      this.allTexts.forEach(span => console.log(span.nativeElement.innerText));
    }
  }
  

}
