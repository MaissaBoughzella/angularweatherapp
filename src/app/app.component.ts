import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularweatherapp';
  weatherDesc="";
  temp="";
  humidity="";
  desc="";
  cityValue="";

  constructor(private apiService:ApiService){
    
  }

  btnClicked(){
    this.apiService.getData().subscribe((data:any)=>{
      console.log(data);
      console.log(data.weather[0].description);
      this.weatherDesc=data.weather[0].description;
    })
  }

  Clicked(city){
      AppComponent.prototype.cityValue=city;
      this.apiService.getData().subscribe((data:any)=>{
      this.temp="tempearture:" + String((parseFloat(data.main.temp)-273.15).toFixed())+"°C";
      this.humidity="humidity:" + data.main.humidity+ "%";
      this.desc=data.weather[0].description;

  })
  }
}
