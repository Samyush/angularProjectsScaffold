import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent1Component } from './sub-component1/sub-component1.component';
import {newItemRouting} from "./subModule.routing";



@NgModule({
  declarations: [
    SubComponent1Component
  ],
  imports: [
    CommonModule,
    newItemRouting
  ]
})
export class SubModuleModule { }
