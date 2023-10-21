import { Injectable } from '@angular/core';
import { IQuoteObject} from './quote-object';

@Injectable({
  providedIn: 'root'
})

export class CompareService {

  compare(quoteObject: IQuoteObject, usersWord:string){
    const wordArray = quoteObject.quote.split(' ')
    const currentWord = wordArray[0]
    const finalWord = wordArray[wordArray.length - 1];

    if(usersWord == currentWord && usersWord != finalWord){

      quoteObject.completed+=usersWord + ' '
      wordArray.shift()
      quoteObject.quote = wordArray.join(' ')

      return 1;
    }else if (usersWord == finalWord){
      quoteObject.completed+=usersWord
      console.log('complete!')
      //make sure word doesn't submit more than once
      //call another service for complete?

      //calculate points
      //launch screen to play again/exit to home.

      return 2;
    }

    return 0;

  }
}
