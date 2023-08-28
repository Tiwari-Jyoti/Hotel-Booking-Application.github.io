import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { RestService } from 'src/app/_service/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new Customer();
  constructor(private service: RestService, private router: Router) { }

  ngOnInit(): void {
  }
  

  register() {
    this.service.registerUser(this.user).subscribe(d => {
      alert("SuccessFully registered");
      console.log(d);
      this.router.navigate(['login'])
    }, f => { console.log(f); alert("User name already exist"); this.ngOnInit() }, () => console.log("SuccessFully Registered"));
  }
}
