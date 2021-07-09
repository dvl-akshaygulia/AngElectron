import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame, remote, BrowserWindow } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {
  
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  window: BrowserWindow;
  //location$= new BehaviorSubject();

   

  constructor() { 
    this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;
      this.window = window.require('electron').remote.getCurrentWindow();
  }

}
