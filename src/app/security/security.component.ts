import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';
import { RequestResponse } from '../models/currency';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any={
      "username": "pjuarez",
      "password": "pjuarez"
  }

  response:any=[];

  constructor(private service:JwtClientService, private router:Router) { 
  }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>this.accessApi(data));
  }

  public accessApi(token: any){
    let resp=this.service.currency(token);
    resp.subscribe(data=>{
      console.log(data);
      this.response=data;
    });

  }

}
