import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  isbn:string;
  book:Book;

  constructor(private route: ActivatedRoute, private bookData:BookDataService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: {isbn: string}) => { this.isbn = params.isbn });
    console.log("Edit book with ISBN:" + this.isbn);
    console.log("Get Book Data for ISBN");
    this.bookData.getBookByIsbn(this.isbn).subscribe(book => this.book=book);
  }

  saveBook(formValues){
    console.log("Saving book: " + formValues.isbn);
    console.log(formValues);
  }
}
