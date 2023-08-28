import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private service: RestService) { }

  places: Place[] = []
  ngOnInit(): void {
    this.service.getallplaces().subscribe(d => { this.places = d; console.log(d) }, f => console.log(f));
  }
  updatepname(p: string, id: number) {
    this.service.updatepname(p, id).subscribe(d => { console.log(d); this.ngOnInit() }, f => console.log(f));
  }
  updatepprice(p: string, id: number) {

    this.service.updatepprice(parseInt(p), id).subscribe(d => { console.log(d); this.ngOnInit() }, f => console.log(f));
  }
  updatelocation(p: string, id: number) {
    this.service.updateploc(p, id).subscribe(d => { console.log(d); this.ngOnInit() }, f => console.log(f));
  }
  updatepdesc(p: string, id: number) {
    this.service.updateploc(p, id).subscribe(d => { console.log(d); this.ngOnInit() }, f => console.log(f));
  }
  updateprating(p: string, id: number) {
    this.service.updateprate(parseInt(p), id).subscribe(d => { console.log(d); this.ngOnInit() }, f => console.log(f));
  }
  updatetype(p: string, id: number) {
    this.service.updateptype(p, id).subscribe(d => { console.log(d); this.ngOnInit() }, f => console.log(f));
  }
  updatereserved(p: string, id: number) {
    this.service.updatereserved(p, id).subscribe(d => { console.log(d); this.ngOnInit() }, f => console.log(f));
  }

  delete(p: Place) {
    this.service.deleteplace(p.id).subscribe(d => { alert("deleted Succfully"); this.ngOnInit() }, f => console.log(f))
  }

}
