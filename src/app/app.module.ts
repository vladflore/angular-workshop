import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {InfoBoxComponent} from "./info-box/info-box.component";
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import {routing} from "./app.routing";
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import {BookModule} from "./book/book.module";

@NgModule({
  declarations: [
    AppComponent, InfoBoxComponent, MouseCursorComponent, TitleBoxComponent, PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
