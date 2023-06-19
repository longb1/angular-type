import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerateQuoteService {
  private RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Promise<string> {
    return this.http.get<{ content: string }>(this.RANDOM_QUOTE_API_URL)
      .toPromise()
      .then(response => response.content)
      .catch(error => {
        console.error('Error occurred while fetching random quote:', error);
        throw error;
      });
  }
}
