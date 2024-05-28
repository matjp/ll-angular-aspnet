import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class BookItemService {

  constructor(private http: HttpClient) { }

  updateBook(buttonAction: string, bookTitle: string) {
    const requestOptions = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.http.put(apiUrl + 'books/' + buttonAction.toLowerCase() + '/' + bookTitle, null, requestOptions);
  }

}