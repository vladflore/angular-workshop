import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found-component";
import {TasksComponent} from "./tasks/tasks.component";
import {InfoComponent} from "./info/info.component";


const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'}/*,
  {path: 'books', loadChildren: './book/book.module#BookModule'}*/,
  {path: 'tasks', component: TasksComponent},
  {path: 'info', component: InfoComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const appRouting = RouterModule.forRoot(routes);
