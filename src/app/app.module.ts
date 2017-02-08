import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InfoBoxComponent} from "./info-box/info-box.component";
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { BookListComponent } from './book-list/book-list.component';
import {BookDataService} from "./book-list/shared/book-data.service";

@NgModule({
  declarations: [
    AppComponent, InfoBoxComponent, MouseCursorComponent, TitleBoxComponent, BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
