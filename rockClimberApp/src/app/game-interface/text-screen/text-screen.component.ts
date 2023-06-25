import { Component, Input,ViewChildren,QueryList,ElementRef, OnChanges } from '@angular/core';
import { GenerateQuoteService } from 'src/app/qenerate-quote.service';
@Component({
  selector: 'app-text-screen',
  templateUrl: './text-screen.component.html',
  styleUrls: ['./text-screen.component.scss']
})
export class TextScreenComponent implements OnChanges {
  constructor(private generateQuoteService : GenerateQuoteService) { }

  @Input() userInput!: string;
  @ViewChildren('textScreen') allTexts!: QueryList<ElementRef>;
  typeThis!:string;
  triggerService() {
    // this.typeThis = this.generateQuoteService.getRandomQuote();
    this.generateQuoteService.getRandomQuote().subscribe((quote: string) => {
      this.typeThis = quote
    })
  }
  
  ngOnChanges() {
    this.highlightMatchedChars();
  }
  
  highlightMatchedChars() {
    if (this.allTexts && this.allTexts.length > 0) {
      this.allTexts.forEach(span => console.log(span.nativeElement.innerText));
    }
  }
  

}
