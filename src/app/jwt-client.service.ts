import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  public generateToken(request: any){
    return this.http.post("http://localhost:8085/tata/authenticate", request,{responseType: 'text' as 'json'});
  }

  public currency(token: any){
    let tokenStr='Bearer '+ token;
    let headers=new HttpHeaders().set("Authorization", tokenStr);
    const url = "http://localhost:8085/tata/currency"
    return this.http.get<RequestResponse>(url, {headers})
    .pipe(
      map( (resp:RequestResponse) => {
        return resp
      } )
    )
  }

  public updateCurrency(token: any, id: number, codigoDivisa: string, nombre: string, tipoCambio: number){
    let tokenStr='Bearer '+ token;
    let headers=new HttpHeaders().set("Authorization", tokenStr);
    let obj ={id, codigoDivisa, nombre, tipoCambio}
    const url = "http://localhost:8085/tata/currency/update"
    return this.http.post<any>(url, obj, {headers})
  }

}
