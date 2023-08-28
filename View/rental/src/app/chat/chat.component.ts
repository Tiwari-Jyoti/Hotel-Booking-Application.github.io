import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '../model/answer';
import { Customer } from '../model/customer';
import { Question } from '../model/question';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Questions: Question[] = [];

  constructor(public service: RestService, public http: HttpClient, public router: Router) { }
  user: Customer = new Customer();
  answer: Answer = new Answer();
  ngOnInit(): void {
    this.user = this.service.getUserdetails();
    console.log("userdetails", this.user);
    this.service.getallQuestions().subscribe(d => { console.log(d); this.Questions = d }, f => console.log(f));

  }
  addanswer(Question: Question, ans: string) {
    this.service.setquestion(Question);
    this.answer.cid = this.user.id;
    this.answer.cname = this.user.username;
    this.answer.answer = ans;
    this.answer.qid = Question.id
    this.service.addanswer(this.answer).subscribe(d => { alert(`answer added to ${Question.id}`); console.log(d); this.ngOnInit() }, f => console.log(f));
    console.log(ans)
  }

}
