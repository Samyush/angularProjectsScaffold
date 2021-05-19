import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {
    path: 'lazyLoad', // import functions returns a promise and then executes the next step to be done
    loadChildren: () => import('./sub-module/sub-module.module').then(
      m => m.SubModuleModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
