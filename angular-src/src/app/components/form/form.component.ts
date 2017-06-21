import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [LocationService]
})
export class FormComponent implements OnInit, OnDestroy {
  sub;
  locId;
  name;
  uname;
  rating;
  reviewText;
  lId;

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private _location: Location,
    ) {
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.locId = params['location._id'];
    });

    this.locationService.getLocationInfo(this.locId).subscribe(location => {
      this.name = location.name;
    });
  }


  onReviewSubmit() {
    const review = {
      author: this.uname,
      rating: parseInt(this.rating, 10),
      reviewText: this.reviewText,
    };

    this.locationService.postReview(review, this.locId).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Thank you for Review', {cssClass: 'alert-success', timeout: 3000});
          // this.router.navigate(['/:location._id']);
          this._location.back();
        } else {
          this.flashMessage.show('Something went wrong, please try again', {cssClass: 'alert-danger',
           timeout: 3000});
        }
    }, err => { console.log(err) });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
