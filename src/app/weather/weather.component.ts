import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../service/weather-api.service';
import { error } from 'protractor';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecast : any;
  constructor(private seatherApiService : WeatherApiService) { }

  ngOnInit(): void {
  }

  onCitySelected(value:string){
    console.log("the selected value is " + value);
    this.seatherApiService.forecastByCity(value).subscribe((res)=> {
      this.forecast =  res.data;
      console.log(this.forecast);
      
    }, (error)=> {
      console.log(error);
    })
}

}


