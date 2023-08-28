import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { Question } from '../model/question';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(public service: RestService) { }
  question: Question = new Question();
  user: Customer = new Customer();
  Questions: Question[] = [];
  ngOnInit(): void {
    this.user = this.service.getUserdetails()
    this.service.getuserQuestions(this.user.id).subscribe(d => { console.log(d); this.Questions = d }, e => console.log(e))
  }
  addQ(ques: string) {
    this.question.question = ques;
    this.question.cid = this.user.id;
    this.question.cname = this.user.username;
    this.service.addQuestion(this.question).subscribe(d => { console.log(d); alert("question added"); this.ngOnInit() }, e => console.log(e));

  }

}
