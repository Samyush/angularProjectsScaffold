import { Component, OnInit } from '@angular/core';

import {NetworksService} from "../../shared/networking/networks.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  newToken: string = 'Hello';

  constructor(private api: NetworksService) { }

  ngOnInit(): void {
    this.api.posting('data')
  }

}
