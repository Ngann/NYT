import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers:[WeatherApiService]
})
export class NavigationComponent {
  infos: any[]=null;
  constructor(private humidity: WeatherApiService) { }

  getHumidity(city: string){
    this.humidity.getByCity(city).subscribe(response => {
      this.infos = response.json();
      console.log(response)
    });
  }

}
