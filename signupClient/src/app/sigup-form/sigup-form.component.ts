import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../shared/user.model';
import {SignupService} from '../services/signup.service';

@Component({
  selector: 'app-sigup-form',
  templateUrl: './sigup-form.component.html',
  styleUrls: ['./sigup-form.component.css']
})
export class SigupFormComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor(private signupService: SignupService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.firstName, value.lastName, value.email, value.password);
    this.signupService.onSigup(newUser)
      .subscribe(user => console.log(user));
  }

}
