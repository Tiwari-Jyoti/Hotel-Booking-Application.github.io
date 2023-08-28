import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private service: RestService) { }
  users: Customer[] = [];
  ngOnInit(): void {
    this.service.getallCustomers().subscribe(d => { console.log(d); this.users = d }, f => console.log(f));
  }
  deleteQ(u: Customer) {
    this.service.deleteuser(u.id).subscribe(d => { alert(`${u.username} deleted successfully`); this.ngOnInit() }, f => console.log("error" + f));
  }
  update(u: Customer, p: string, a: string) {
    this.service.updateUser(u.id, p, a).subscribe(d => { alert(`${u.username} details updated`); this.ngOnInit() }, f => console.log(f));
  }

}
