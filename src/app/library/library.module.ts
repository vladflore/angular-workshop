import {NgModule} from '@angular/core';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDataService} from "./shared/book-data.service";
import {CommonModule} from "@angular/common";
import {ConfirmCandeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import {BookEditComponent} from './book-edit/book-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookNewComponent} from './book-new/book-new.component';
import {LibraryComponent} from "./library.component";
import {libraryRouting} from "./library.routing";


@NgModule({
  imports: [
    /*means that components in the BookModule module also have access to the Angular directives every app needs such as NgIf and NgFor.*/
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    libraryRouting
  ],
  declarations: [BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent, LibraryComponent],
  providers: [BookDataService, ConfirmCandeactivateGuardService]
})
export class LibraryModule {
}
