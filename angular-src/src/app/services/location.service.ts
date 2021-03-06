import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationService {
  private apiUrl;
  constructor(private http: Http) {
    console.log('LocationService initialized...');
  }

  getLocations() {
    this.apiUrl =  'api/locations?lng=77.49&lat=13.81&maxDistance=9000';
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }
  getLocationInfo(locId) {
    this.apiUrl =  'api/locations/' + locId;
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  postReview(review, locId) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(locId + '/reviews/new', review, {headers: headers})
      .map(res => res.json());
  }
}
