import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LocationService]
})
export class HomeComponent implements OnInit {
  ratings: number[];
  locations: locations[];

  constructor(
    private locationService: LocationService,
    private router: Router
    ) {

    this.ratings = [0,1,2,3,4,5];

    this.locationService.getLocations().subscribe(locations => {
       this.locations = locations;
     });

   }

  ngOnInit() {
  }

  formatDistance (distance){
      var numDistance, unit;
      if(distance > 1){
        numDistance = parseFloat(distance).toFixed(1);
        unit        = 'km';
      } else {
        numDistance = parseInt(distance, 10) * 1000;
        unit        = 'm'
      }
      return numDistance + unit;
    }

}
interface locations {
  name: String,
  address: String,
  rating: number,
  facilities: String[],
  distance: String
}