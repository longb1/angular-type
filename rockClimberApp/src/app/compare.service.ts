import { Injectable } from '@angular/core';
import { IQuoteObject} from './quote-object';
@Injectable({
  providedIn: 'root'
})
export class CompareService {

  // constructor() { }


  compare(quoteObject: IQuoteObject, usersWord:string){
    let currentWord = quoteObject.wordArray[quoteObject.indexProgress]
    const finalWord = quoteObject.wordArray[quoteObject.wordArray.length - 1];

    if(usersWord == currentWord && usersWord != finalWord){

      const completedChars= usersWord.split("")
      for(let i=0;i<completedChars.length+1;i++){ //add 1 to length so it includes the space as well.
        quoteObject.charArray[i].classList.remove("incomplete") //removes class off the first # of nodelist.
        quoteObject.charArray[i].classList.add("correct")
      }
    
      quoteObject.indexProgress++;
      currentWord = quoteObject.wordArray[quoteObject.indexProgress]
    
    }else if(usersWord==finalWord){
      console.log("complete!")
      //implement progress bar
    }

  }
}
