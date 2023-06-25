import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateQuoteService {
  private RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

  constructor(private http: HttpClient) { }

  // getRandomQuote() {
  //   this.http.get(this.RANDOM_QUOTE_API_URL).subscribe((response: any) => {
  //     const content = response.content; // Extract the 'content' property from the response
  //     // Use the 'content' variable as needed
  //     return content.toString()
  //   });
  // }

  getRandomQuote(): Observable<string> {
    return this.http.get(this.RANDOM_QUOTE_API_URL).pipe(
      map((response: any) => {
        const content = response.content;
        return content.toString();
      })
    );
  }
}
