import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherApiService]
})
export class WeatherComponent {

  infos: any[]=null;
  constructor(private humidity: WeatherApiService) { }

  getHumidity(city: string){
    this.humidity.getByCity(city).subscribe(response => {
      this.infos = response.json();
      console.log(response)
    });
  }
}
