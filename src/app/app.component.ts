import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  located: boolean;

  constructor(){
    this.lat = 17.0931569;
    this.lng = -96.7566577;
    this.zoom = 6;
    this.mapTypeId = "hybrid";
    this.located = false;
  }

  getCurrentPosition(){
    navigator.geolocation.getCurrentPosition(position =>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
    });
  }

}
