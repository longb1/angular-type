import { Component, Input,ViewChildren,QueryList,ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text-screen',
  templateUrl: './text-screen.component.html',
  styleUrls: ['./text-screen.component.scss']
})
export class TextScreenComponent implements OnChanges {
  @Input() userInput!: string;
  @ViewChildren('textScreen') allTexts!: QueryList<ElementRef>;

  ngOnChanges() {
    this.highlightMatchedChars();
  }
  
  highlightMatchedChars() {
    this.allTexts.forEach(span => console.log(span.nativeElement.innerText))

  }
  

}
