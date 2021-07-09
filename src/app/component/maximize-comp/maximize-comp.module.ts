import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MaximizeCompComponent} from '../maximize-comp/maximize-comp.component';
import { NgxElectronModule } from 'ngx-electron';

const routes: Routes = [{
    path:'',  component:MaximizeCompComponent,
    children: [
      {
        path: 'dashboard'    }
  ]
    }];
  
  @NgModule({
    declarations: [
        MaximizeCompComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      NgxElectronModule
    ],
    providers:[]
  })
  export class MaximizeCompModule { }
  