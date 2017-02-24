import {TasksComponent} from "./tasks.component";
import {Routes, RouterModule} from "@angular/router";
import {InfoBoxComponent} from "./info-box/info-box.component";
import {MouseCursorComponent} from "./mouse-cursor/mouse-cursor.component";
import {TitleBoxComponent} from "./title-box/title-box.component";
import {LibraryComponent} from "../library/library.component";
import {ConfirmCandeactivateGuardService} from "../library/shared/confirm-candeactivate-guard.service";
import {BookDetailComponent} from "../library/book-detail/book-detail.component";
import {BookNewComponent} from "../library/book-new/book-new.component";
import {BookListComponent} from "../library/book-list/book-list.component";
import {BookEditComponent} from "../library/book-edit/book-edit.component";

const routes: Routes = [{
  path: 'tasks',
  component: TasksComponent,
  children: [{
    path: 'info-box',
    component: InfoBoxComponent
  }, {
    path: 'mouse-cursor',
    component: MouseCursorComponent
  }, {
    path: 'title-box',
    component: TitleBoxComponent
  }, {
    path: 'library',
    component: LibraryComponent,
    children: [
      {
        component: BookListComponent,
        path: ''
      }, {
        component: BookNewComponent,
        path: 'new'
      },
      {
        component: BookDetailComponent,
        path: ':isbn',
        canDeactivate: [ConfirmCandeactivateGuardService]
      },
      {
        component: BookEditComponent,
        path: ':isbn/edit'
      }]
  }]
}]

export const tasksRouting = RouterModule.forChild(routes);
