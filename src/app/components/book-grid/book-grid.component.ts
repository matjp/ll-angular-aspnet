import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookItemComponent } from '../book-item/book-item.component';
import { BookGridService } from './book-grid.service';
import Book from '../../model/book';

@Component({
  selector: 'app-book-grid',
  standalone: true,
  imports: [ NgFor, BookItemComponent ],
  templateUrl: './book-grid.component.html',
  styleUrl: './book-grid.component.css',
  providers: [BookGridService]
})
export class BookGridComponent {
  _filter: number = 0;
  @Input() set filter(filterId: number) {
    this._filter = filterId;
    this.loadData();
  }
  @Input() buttonAction: string = '';
  @Input() books: Book[] = [];

  constructor(private bookGridService: BookGridService) { 
  }

  loadData() {
    this.bookGridService.getData(this._filter).subscribe(data => { 
      this.books = [ ...data ];
      if (this._filter == 0) {
        this.buttonAction = 'Borrow'
      } else if (this._filter == 1) {
        this.buttonAction = 'Return'
      } else {
        this.buttonAction = 'Undefined'
      }
   });
  }
}
