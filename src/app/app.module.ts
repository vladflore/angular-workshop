import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found-component';
import {TasksModule} from "./tasks/tasks.module";
import {InfoModule} from "./info/info.module";

import {appRouting} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    TasksModule,
    InfoModule,

    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
