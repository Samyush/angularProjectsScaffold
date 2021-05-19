import {Routes, RouterModule, Router} from '@angular/router';
import {SubComponent1Component} from "./sub-component1/sub-component1.component";


const newItemRoutes: Routes = [
  // {path: 'add', component: MediaItemFormComponent},
  // the 'add' is changed to '' as we dont want the application to read and run on a url of homeURL/add/add
  {path: '', component: SubComponent1Component},
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
