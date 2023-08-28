import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Place } from '../model/place';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: RestService, public router: Router, public route: ActivatedRoute) { }
  sites: Place[] = [];
  place1: Place = new Place();
  searchmode!: boolean;
  Category: any = "";
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getplacesbyPlacename()
    })
  }

  getplacesbyPlacename() {
    this.searchmode = this.route.snapshot.paramMap.has('keyword');
    console.log(this.searchmode);
    if (this.searchmode) {
      this.handelsearch();
    } else {
      this.handlelist();
    }

  }
  handlelist() {
    const hascname: boolean = this.route.snapshot.paramMap.has('name')
    console.log("has cname" + hascname);
    if (hascname) {
      this.Category = this.route.snapshot.paramMap.get("name");
      console.log(this.Category);
      if (this.Category === "sortplaceslow") {
        console.log("low-high")
        this.service.getplacesBT().subscribe(d => { this.sites = d; console.log(d) }, f => console.log(f))
      }
      else if (this.Category === "sortplacestop") {
        console.log("high-low")
        this.service.getplacesTB().subscribe(d => { this.sites = d; console.log(d); }, f => console.log(f))
      }
      else {
        this.service.searchplacesbyviewpoint(this.Category).subscribe(d => { this.sites = d; console.log(d) }, f => console.log(f));
      }
    } else {
      this.getplaces();
    }
  }

  handelsearch() {
    const thekey: any = this.route.snapshot.paramMap.get('keyword');
    this.service.searchplaces(thekey).subscribe(d => { this.sites = d }, f => console.log(f));
  }
  getplaces() {
    this.service.getallplaces().subscribe(d => { this.sites = d; console.log(d) }, f => console.log(f))
  }

  checkIn(area: Place) {
    this.service.setplace(area);
    this.router.navigate(['checkout'])
  }

}
