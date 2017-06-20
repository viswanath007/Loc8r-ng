import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationService {
  private apiUrl;
  constructor(private http: Http) {
    console.log('LocationService initialized...');
  }

  getLocations() {
    this.apiUrl =  'http://localhost:3000/api/locations?lng=77.49&lat=13.81&maxDistance=9000';
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }
  getLocationInfo(locId) {
    this.apiUrl =  'http://localhost:3000/api/locations/' + locId;
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }
}