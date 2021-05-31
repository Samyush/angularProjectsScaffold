import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

import {NetworksService} from "../../shared/networking/networks.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  newToken: string = 'Hello';
  form: FormGroup | any;

  constructor(private api: NetworksService) { }

  ngOnInit(): void {
    this.api.postData(this.form.value)
  }

  submit(){
    this.api.postData({
      email: 'samyush@email.com',
      password: '123123'
    })
  }
}
