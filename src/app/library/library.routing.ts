import {Routes, RouterModule} from "@angular/router";
import {LibraryComponent} from "../library/library.component";


const routes: Routes = [{
  path: '',
  component: LibraryComponent
}]

export const libraryRouting = RouterModule.forChild(routes);
