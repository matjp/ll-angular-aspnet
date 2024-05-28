import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../../../package.json';
import Book from '../../model/book';

@Injectable()
export class BookGridService {

  constructor(private http: HttpClient) { }

  getData(filter: number) {
    return this.http.get<Book[]>(apiUrl + 'books/' + filter.toString());
  }
}
