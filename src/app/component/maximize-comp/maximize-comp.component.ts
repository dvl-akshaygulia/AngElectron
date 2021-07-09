import { Component, OnInit, NgZone } from '@angular/core';
import {LocationDataService} from '../../../services/location-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maximize-comp',
  templateUrl: './maximize-comp.component.html',
  styleUrls: ['./maximize-comp.component.css']
})
export class MaximizeCompComponent implements OnInit {

  constructor(private locationData:LocationDataService,private router:Router,private zone: NgZone) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.locationData.ipcRenderer.on('minimize',(event,message)=>{
      console.log(message);
      this.zone.run(() => {
        this.router.navigateByUrl('minimize');
    });
    })
  }

  maximizeWindow(){
    console.log("maximize");
    this.locationData.window.maximize();
  }

}
