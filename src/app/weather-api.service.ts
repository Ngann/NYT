import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { weatherApi} from  './api-keys';

@Injectable()
export class WeatherApiService {
   constructor(private http: Http) { }

   getByCity(city: string) {return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi.apiKey}`)
}

}
