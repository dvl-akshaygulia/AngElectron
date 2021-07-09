import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';
import {LocationDataService} from '../services/location-data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [LocationDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
