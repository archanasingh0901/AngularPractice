import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    number: new FormControl(''),
  });

  registerSubmitted() {
    console.log(this.registerForm.value);
  }
}
