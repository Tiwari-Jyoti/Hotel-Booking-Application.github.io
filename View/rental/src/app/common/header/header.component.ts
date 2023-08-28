import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { AuthService } from 'src/app/_service/auth.service';
import { RestService } from 'src/app/_service/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  User: Customer = new Customer();
  constructor(private router: Router, public service: RestService, private Authservice: AuthService) { }

  ngOnInit(): void {
    this.User = this.service.getUserdetails();
    console.log(this.User.username)
  }

  public isLoggedin() {
    return this.Authservice.isLoggedIn();
  }

  public logout() {
    alert("LoggedOut SuccessFully")
    this.router.navigate(['login'])
    this.service.setFullUserDetails(new Customer());
    return this.Authservice.clear();
  }
  dosearch(ele: string) {
    console.log(`value = ${ele}`);
    this.router.navigateByUrl(`/search/${ele}`);
  }
}
