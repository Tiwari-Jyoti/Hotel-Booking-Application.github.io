import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { Place } from '../model/place';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public service: RestService, public router: Router) { }
  area: Place = new Place();
  days: number = 0;
  totalprice: number = 0;
  checkinDate: string = "";
  checkoutDate: string = "";
  
  user: Customer = new Customer();
  ngOnInit(): void {
    this.user = this.service.getUserdetails();
    this.area = this.service.getplace();
    console.log(this.area)
  }
  total(a: string) {
    this.days = +a
    this.totalprice = (this.days * this.area.price)
  }

  updateTotalPrice() {
    const days = this.calculateDays();
    this.totalprice = days * this.area.price;
  }

  calculateDays(): number {
    const startDate = new Date(this.checkinDate);
    const endDate = new Date(this.checkoutDate);
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

getMaxCheckOutDate(): string {
    if (!this.checkinDate) {
      return "";
    }

    const checkinDateObj = new Date(this.checkinDate);
    const maxDateObj = new Date(checkinDateObj);
    maxDateObj.setDate(checkinDateObj.getDate() + 180);
    return maxDateObj.toISOString().split('T')[0];
}

initiatePayment() {
  alert(`Hotel Payment initiated`)
}

}
