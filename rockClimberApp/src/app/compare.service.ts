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
      
      //remove completed word from quote
      wordArray.shift()
      //set new quote
      quoteObject.quote = wordArray.join(' ')

      return 1;
    }else if (usersWord == finalWord){
      quoteObject.completed+=usersWord
      console.log('complete!')
      return 1;
    }

    return 0;

  }
}
