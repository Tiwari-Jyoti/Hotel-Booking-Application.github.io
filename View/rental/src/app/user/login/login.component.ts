import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/_service/rest.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: RestService, public router: Router, public Authservice: AuthService) { }
  success: boolean = false;
  user = new Customer();
  msg: string = ""
  ngOnInit(): void {
  }
  login() {
    this.service.loginUser(this.user).
      subscribe((data: any) => {
        console.log(data.token);
        console.log(data.user),
        this.Authservice.setToken(data.token);
        this.Authservice.setroles(data.user.role);
        this.service.setFullUserDetails(data.user);
        this.service.saveUsername(data.user.name);
        const role = data.user.role;
        if (role === 'ROLE_USER') {
          console.log("Logged in as a User");
          this.router.navigate(['home'])
        } else {
          console.log("Logged in as a Admin");
          this.router.navigate(['admindash']);
        }
        console.log("Checking UserStatus " + this.Authservice.isLoggedIn());
        this.user.username = "";
        this.user.password = "";
      }, (error) => {
        this.msg = "Enter the valid Username and Password"
        alert("Incorrect password and Username");
        console.log("Error " + error)
        this.user.username = "";
        this.user.password = "";
      },
        () => console.log("successfully token generated"));

  }

  isLoggedin() {
    return this.Authservice.isLoggedIn();
  }
}
