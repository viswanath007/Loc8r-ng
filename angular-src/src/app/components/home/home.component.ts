import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';

@Component({
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

    this.ratings = [1,2,3,4,5];

    this.locationService.getLocations().subscribe(locations => {
       this.locations = locations;
     });

    // this.locations = [{
    //         name: 'Starcups',
    //         address: '125 High Street, Reading, RG6 1PS',
    //         rating: 3,
    //         facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    //         distance: '100m'
    //     }, {
    //         name: 'Cafe Hero',
    //         address: '125 High Street, Reading, RG6 1PS',
    //         rating: 4,
    //         facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    //         distance: '200m'
    //     }, {
    //         name: 'Burger Queen',
    //         address: '125 High Street, Reading, RG6 1PS',
    //         rating: 2,
    //         facilities: ['Food', 'Premium wifi'],
    //         distance: '250m'
    //     }];


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