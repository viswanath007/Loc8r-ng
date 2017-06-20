import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loc-info',
  templateUrl: './loc-info.component.html',
  styleUrls: ['./loc-info.component.css'],
  providers: [LocationService]
})
export class LocInfoComponent implements OnInit, OnDestroy {
  name;
  address;
  openingTimes;
  facilities;
  coors;
  lat;
  lng;
  reviews;
  ratings;
  locId;
  sub;

  constructor(private locationService: LocationService,
    private route: ActivatedRoute
    ) {
    this.ratings = [1,2,3,4,5];

    this.sub = this.route.params.subscribe(params => {
       this.locId = params['location._id'];
    });

    this.locationService.getLocationInfo(this.locId).subscribe(location => {
      this.name = location.name;
      this.address = location.address;
      this.openingTimes = location.openingTimes;
      this.facilities = location.facilities;
      this.lat = location.coords[1];
      this.lng = location.coords[0];
      this.reviews = location.reviews;
    });

   }


   ngOnInit() {
     
   }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
    const d = date.getDate();
    const m = monthNames[date.getMonth()];
    const y = date.getFullYear();
    const output = d + ' ' + m + ' ' + y;
    return output;
  }

}