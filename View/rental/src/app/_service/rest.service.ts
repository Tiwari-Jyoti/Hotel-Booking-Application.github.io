import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

import { Answer } from '../model/answer';
import { Customer } from '../model/customer';
import { Image } from '../model/image';
import { Place } from '../model/place';
import { Question } from '../model/question';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  user: Customer = new Customer();
  users!: Customer[];
  question: Question = new Question();
  customername!: string;
  place: Place = new Place();
  constructor(private http: HttpClient, private Authservice: AuthService) { }

  requestHeaders = new HttpHeaders(
    { "No-Auth": "True" }
  );
  public registerUser(user: Customer) {
    return this.http.post("http://localhost:8181/register", user, { headers: this.requestHeaders });
  }
  public loginUser(user: Customer) {
    return this.http.post("http://localhost:8181/authenticate", user, { headers: this.requestHeaders });
  }

  public getUserByUsername(name: String) {
    return this.http.get(`http://localhost:8181/getUserbyUsername/${name}`, { headers: this.requestHeaders });
  }

  public setFullUserDetails(userdetails: Customer) {
    this.user = userdetails;
  }

  public getUserdetails(): Customer {
    return this.user;
  }
  // storing users nd getting users
  public getUserslist() {
    return this.users;
  }

  public setUserList(user: Customer[]) {
    this.users = user;
  }

  public setquestion(que: Question) {
    this.question = que;
  }
  public getquestion() {
    return this.question
  }

  public setplace(site: Place) {
    this.place = site;
  }
  public getplace() {
    return this.place;
  }


  public rolematch(role: string): boolean {
    let ismatch = false;
    const userrole = this.Authservice.getroles();
    if (userrole === role) {
      ismatch = true;
      return ismatch;
    } else {
      return ismatch;
    }
  }



  saveUsername(name: string) {
    this.customername = name;
  }
  getusername() {
    return this.customername;
  }

  getUserById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8181/getUserById/${id}`)
  }

  saveImage(img: Image): Observable<Place> {
    return this.http.post<Place>(`http://localhost:8282/addimage`, img);
  }

  saveplace(area: Place): Observable<Place> {
    return this.http.post<Place>("http://localhost:8282/addplace", area)
  }

  addQuestion(ques: Question): Observable<Question> {
    return this.http.post<Question>("http://localhost:8181/addQuestion", ques);
  }

  getallQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>("http://localhost:8181/getallQuestions");
  }

  getuserQuestions(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(`http://localhost:8181/getUserQuestions/${id}`)
  }
  addanswer(ans: Answer): Observable<Answer> {
    return this.http.post<Answer>("http://localhost:8181/addAnswer", ans);
  }
  getallCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:8181/findallCustomers");
  }

  updateUser(id: number, phn: string, add: string) {
    return this.http.put(`http://localhost:8181/updateUser/${id}/${phn}/${add}`, { id, phn, add })
  }
  deleteuser(id: number) {
    return this.http.delete(`http://localhost:8181/deletecustomer/${id}`);
  }

  getallplaces(): Observable<Place[]> {
    return this.http.get<Place[]>("http://localhost:8282/findallplaces");
  }

  updatepname(name: string, id: number) {
    return this.http.put(`http://localhost:8282/updatepname/${name}/${id}`, { id, name })
  }
  updateploc(name: string, id: number) {
    return this.http.put(`http://localhost:8282/updateploc/${name}/${id}`, { id, name })
  }
  updatepdesc(name: string, id: number) {
    return this.http.put(`http://localhost:8282/updatepdesc/${name}/${id}`, { id, name })
  }
  updateptype(name: string, id: number) {
    return this.http.put(`http://localhost:8282/updateptype/${name}/${id}`, { id, name })
  }
  updatepcontact(name: string, id: number) {
    return this.http.put(`http://localhost:8282/updatepcontact/${name}/${id}`, { id, name })
  }
  updatepprice(name: number, id: number) {
    return this.http.put(`http://localhost:8282/updatepprice/${name}/${id}`, { id, name })
  }
  updateprate(name: number, id: number) {
    return this.http.put(`http://localhost:8282/updateprate/${name}/${id}`, { id, name })
  }
  updatereserved(status: String, id: number) {
    return this.http.put(`http://localhost:8282/updatestatus/${id}/${status}`, { id, name })
  }

  deleteplace(id: number) {
    return this.http.delete(`http://localhost:8282/deleteplace/${id}`)
  }
  searchplaces(place: string): Observable<Place[]> {
    return this.http.get<Place[]>(`http://localhost:8282/searchplaces/${place}`)
  }
  searchplacesbyviewpoint(place: string): Observable<Place[]> {
    return this.http.get<Place[]>(`http://localhost:8282/searchplacesbyfeature/${place}`)
  }

  getplacesBT(): Observable<Place[]> {
    return this.http.get<Place[]>(`http://localhost:8282/bottom2top`)
  }

  getplacesTB(): Observable<Place[]> {
    return this.http.get<Place[]>(`http://localhost:8282/top2bottom`)
  }

  // send Mail
  EmailtoCustomer(tomail: string, sub: string, body: string) {
    return this.http.post(`http://localhost:8383/email?tomail=${tomail}&subject=${sub}&body=${body}`, { tomail, sub, body });
  }


}
