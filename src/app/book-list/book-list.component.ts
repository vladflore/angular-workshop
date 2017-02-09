import {Component, OnInit, OnDestroy} from '@angular/core';
import {BookDataService} from "./shared/book-data.service";
import {Book} from "./shared/book";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  private subscription: Subscription;
  //bookData: BookDataService;

  constructor (private bookData: BookDataService){

    console.log("Constructor");

    //this.bookData = bookData;
    //this.books = bookData.getBooks();
    //bookData.getStaticBooksObservable().subscribe(books => this.books = books);
    //bookData.getDynamicBooksObservable().subscribe(books => this.books = books);

  }

  ngOnInit() {
    console.log("OnInit");
    this.subscription = this.bookData.getDynamicBooksObservable().subscribe(books => this.books = books);
  }

  ngOnDestroy(){
    console.log("OnDestroy");
    this.subscription.unsubscribe();
  }

}
