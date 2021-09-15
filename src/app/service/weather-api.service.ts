import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }
  
  forecastByCity(city_id:string): Observable<any>{
     return this.http.get(`${environment.baseEndpoint}city=${city_id},NC&key=${environment.accessKeyId}`);
  } 
}


const environment = {
  accessKeyId: '1c6beac4e38841d3a225e581248af540',
  baseEndpoint : 'https://api.weatherbit.io/v2.0/forecast/daily?'


};