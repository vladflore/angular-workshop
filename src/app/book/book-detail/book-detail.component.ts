import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  isbn:string;
  book:Book;

  constructor(private route: ActivatedRoute, private bookData:BookDataService) {

  }

  ngOnInit() {
    console.log("BookDetailComponent OnInit");
    this.route.params.subscribe((params: {isbn: string}) => { this.isbn = params.isbn });

    this.bookData.getBookByIsbn(this.isbn).subscribe(book => this.book=book);
  }

  ngOnDestroy(){
    console.log("BookDetailComponent OnDestroy");
  }

}
