import { NgModule } from '@angular/core';
import {booksRouting} from "./book.routing";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDataService} from "./shared/book-data.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    /*means that components in the BookModule module also have access to the Angular directives every app needs such as NgIf and NgFor.*/
    CommonModule,
    booksRouting
  ],
  declarations: [BookComponent, BookListComponent, BookDetailComponent],
  providers: [BookDataService]
})
export class BookModule { }
