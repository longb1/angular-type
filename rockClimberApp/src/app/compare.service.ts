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

    if(usersWord == currentWord){
      quoteObject.completed+=usersWord+' '
      wordArray.shift()
      quoteObject.quote = wordArray.join(' ')
    }
    
    if (currentWord == finalWord){
      return true
    }

    return false;
  }
}
