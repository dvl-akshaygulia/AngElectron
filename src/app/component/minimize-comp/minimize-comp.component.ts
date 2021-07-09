import { Component, OnInit, DoCheck,NgZone } from '@angular/core';
//import { ElectronService } from 'ngx-electron';
//import { ipcRenderer, webFrame, remote, BrowserWindow,shell } from 'electron';
import {LocationDataService} from '../../../services/location-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-minimize-comp',
  templateUrl: './minimize-comp.component.html',
  styleUrls: ['./minimize-comp.component.css']
})
export class MinimizeCompComponent implements OnInit {

  // ipcRenderer: typeof ipcRenderer;
  // webFrame: typeof webFrame;
  // remote: typeof remote;
  // window: BrowserWindow;
  // shell: typeof shell

  constructor(private locationData:LocationDataService,private router:Router,private zone: NgZone) { 
  //   this.ipcRenderer = window.require('electron').ipcRenderer;
  //     this.webFrame = window.require('electron').webFrame;
  //     this.remote = window.require('electron').remote;
  //     this.window = window.require('electron').remote.getCurrentWindow();
   }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.locationData.ipcRenderer.on('maximize',(event,message)=>{
      console.log(message);
      this.zone.run(() => {
        this.router.navigateByUrl('maximize')
    });
    })
  }

  minimizeWindow(){
    console.log("minimize");
    this.locationData.window.minimize();
  }

}
