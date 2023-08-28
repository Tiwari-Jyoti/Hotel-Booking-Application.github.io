import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {

    user: Customer = new Customer();
    constructor(public service: RestService,) {}
    ngOnInit(): void {
      this.user = this.service.getUserdetails();
      console.log(this.user.username)
    }
}
