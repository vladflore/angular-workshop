import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./book.routing";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDataService} from "./shared/book-data.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [BookComponent, BookListComponent, BookDetailComponent],
  providers: [BookDataService]
})
export class BookModule { }
