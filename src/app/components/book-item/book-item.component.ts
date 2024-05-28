import { Component, EventEmitter, Input, Output } from '@angular/core';
import Book from '../../model/book';
import { BookItemService } from './book-item.service';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
  providers: [BookItemService]
})
export class BookItemComponent {
  @Input() buttonAction: string = '';
  @Input() book: Book = {
    title: '',
    author: '',
    cover_image: '',
    borrowed: false
  };
  @Output() bookUpdated = new EventEmitter<void>();

  constructor(private bookItemService: BookItemService) { 
  }

  updateBook(buttonAction: string, bookTitle: string) {
      this.bookItemService.updateBook(buttonAction, bookTitle).subscribe(() => this.bookUpdated.emit());
  }
}
