import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateQuoteService {
  private RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<string> {
    return this.http.get<{content:string}>(this.RANDOM_QUOTE_API_URL).pipe(
      map(response => response.content)
    );
  }
}
