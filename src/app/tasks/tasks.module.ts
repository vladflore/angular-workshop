import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleBoxComponent} from "./title-box/title-box.component";
import {MouseCursorComponent} from "./mouse-cursor/mouse-cursor.component";
import {InfoBoxComponent} from "./info-box/info-box.component";
import {TasksComponent} from "./tasks.component";
import {tasksRouting} from "./tasks.routing";
import {LibraryModule} from "../library/library.module";


@NgModule({
  imports: [
    CommonModule,
    LibraryModule,
    tasksRouting
  ],
  declarations: [InfoBoxComponent, MouseCursorComponent, TitleBoxComponent, TasksComponent]
})
export class TasksModule {
}
