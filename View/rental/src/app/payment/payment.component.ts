import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place';
import { Customer } from '../model/customer';
import { RestService } from '../_service/rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  paymentForm: FormGroup;

  constructor(public service: RestService, public router: Router, private formBuilder: FormBuilder) { 
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/\d{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }
  area: Place = new Place();
  days: number = 0;
  totalprice: number = 0;
  cardNumber: String = "";
  expiryDate: string = "";
  cvv: String = "";

  user: Customer = new Customer();
  ngOnInit(): void {
    this.user = this.service.getUserdetails();
    this.area = this.service.getplace();
    console.log(this.area)
  }
  submitPaymentForm() {
    if (this.paymentForm.invalid) {
      Object.values(this.paymentForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    console.log('Payment form submitted successfully.');
  }

  checkout() {
    alert(`Thank you for the Confirmation`)
    this.service.EmailtoCustomer("tiwarijyoti11022@gmail.com", "BOOKING CONFIRMATION", `${this.user.username} had Confirmed Booking For ${this.area.name} at ${this.area.location} for ${this.days} Days price : ${this.totalprice} contact the customer at ${this.user.phone}`).subscribe(d => console.log(d), f => console.log(f));
    this.router.navigate(['home'])
  }

}

