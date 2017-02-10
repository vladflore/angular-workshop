import { Injectable } from '@angular/core';
import {Book} from "./book";
import {Observable} from "rxjs";
import { Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {tryCatch} from "rxjs/util/tryCatch";

@Injectable()
export class BookDataService {

  constructor(private http:Http) {
  }

  getBooks () {
    //Because the array contains objects of type Book, the objects MUST provide the information required by the interface. publisher Information can be omitted because the interface dictates so.
    let books: Book[] = [{
      "title": "Design Patterns",
      "subtitle": "Elements of Reusable Object-Oriented Software",
      "isbn": "978-0-20163-361-0",
      "abstract": "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
      "numPages": 395,
      "author": "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides"
    },
      {
        "title": "REST und HTTP",
        "subtitle": "Entwicklung und Integration nach dem Architekturstil des Web",
        "isbn": "978-3-86490-120-1",
        "abstract": "Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).",
        "numPages": 330,
        "author": "Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf",
        "publisher": {
          "name": "dpunkt.verlag",
          "url": "http://dpunkt.de/"
        }
      },
      {
        "title": "Eloquent JavaScript1",
        "subtitle": "A Modern Introduction to Programming",
        "isbn": "978-1-59327-584-6",
        "abstract": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "numPages": 472,
        "author": "Marijn Haverbeke",
        "publisher": {
          "name": "No Starch Press",
          "url": "https://www.nostarch.com/"
        }
      }];

    return books;
  }

  getStaticBooksObservable():Observable<Book[]>{
    return Observable.of(this.getBooks());
  }

  getDynamicBooksObservable():Observable<Book[]>{
    return this.http.get('http://localhost:4730/books').map(response => response.json());
  }

  getBookByIsbn(isbn:string):Observable<Book>{
    return this.http.get('http://localhost:4730/books/'+isbn).map(response => response.json());
  }

  createBook(book: Book): Observable<Book> {

    return this.http.post('http://localhost:4730/books', book).map(response => response.json());
  }

  updateBook(isbn: string, vector: any): Observable<Book> {

    return this.http.patch(`http://localhost:4730/books/${isbn}`, vector).map(response => response.json());
  }

}
