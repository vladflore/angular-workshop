import { Component, OnInit } from '@angular/core';
import {BookDataService} from "./shared/book-data.service";
import {Book} from "./shared/book";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor (private bookData: BookDataService){

    this.books = bookData.getBooks();

  }



  ngOnInit() {
  }

}
