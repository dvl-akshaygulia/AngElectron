import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MinimizeCompComponent} from '../minimize-comp/minimize-comp.component';
import { NgxElectronModule } from 'ngx-electron';

const routes: Routes = [{
    path:'',  component:MinimizeCompComponent,
    children: [
      {
        path: 'dashboard'    }
  ]
    }];
  
  @NgModule({
    declarations: [
        MinimizeCompComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      NgxElectronModule
    ],
    providers:[]
  })
  export class MinimizeCompModule { }
  