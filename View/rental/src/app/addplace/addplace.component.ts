import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../model/customer';
import { Image } from '../model/image';
import { Place } from '../model/place';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrls: ['./addplace.component.css']
})
export class AddplaceComponent implements OnInit {

  constructor(public service: RestService, private router: Router) { }
  success: boolean = false
  site = new Place();
  placeid!: number;
  ngOnInit(): void {

  }
  register() {
    this.service.saveplace(this.site).subscribe(d => {
      this.service.setplace(d);
      console.log(d);
      alert("place Added")
      this.router.navigate(['places'])
      this.ngOnInit();
    }, f => { console.log(f); alert("User name already exist"); this.ngOnInit() }, () => console.log("SuccessFully Registered"))
  }

  validateContact(contact: string): boolean {
    return /^[6-9]\d{9}$/.test(contact);
}

 validateRating(rating: number): boolean {
  return !isNaN(rating) && rating >= 0;
}

validatePrice(price: number): boolean {
  return !isNaN(price) && price > 0;
}


}
