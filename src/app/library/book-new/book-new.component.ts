import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";
import {Router} from "@angular/router";

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private bookService:BookDataService, private router:Router) {
  }

  addNewBook(){
    console.log("Saving: " + this.form.value.title);
    const book: Book = {
      isbn: '',
      title: this.form.value.title,
      author: 'Ich',
      subtitle: '',
      abstract: '',
      numPages: 123,
      publisher: {
        name: '',
        url: ''
      }
    };

    this.bookService.createBook(book).subscribe((book: Book) => console.log('Added new book', book.title));
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['default value',Validators.required]
    });
  }

  navigateToLibrary(){
    console.log('Navigate to library');
    this.router.navigate(['/books']);
  }

}
