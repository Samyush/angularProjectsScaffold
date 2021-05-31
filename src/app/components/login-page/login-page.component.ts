import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

import {NetworksService} from "../../shared/networking/networks.service";
import {LoginServiceService} from "../../login-service.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  newToken: string = 'Hello';
  form: FormGroup | any;

  constructor(private api: NetworksService, private sam: LoginServiceService) { }

  ngOnInit(): void {
    this.sam.newLogin(
      {
        email: 'samyush@email.com',
        password: '123123'
      }
    )
    // this.api.postData({
    //   email: 'samyush@email.com',
    //   password: '123123'
    // });
  }

  submit(){
    this.api.postData({
      email: 'samyush@email.com',
      password: '123123'
    })
  }
}
