import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 

  }
  city="";
  getData(){
    this.city=AppComponent.prototype.cityValue;
    console.log(this.city);
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&APPID=b4b30947721b3bf2f5bbc69e0d18b2af");
  
  }
}
