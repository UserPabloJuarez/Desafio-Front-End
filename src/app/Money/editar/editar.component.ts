import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtClientService } from 'src/app/jwt-client.service';
import { RequestResponse } from 'src/app/models';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  authRequest:any={
    "username": "pjuarez",
    "password": "pjuarez"
}
  response!: FormGroup<any>;

  constructor(
    public fb: FormBuilder,
    private service:JwtClientService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService, 
    private router:Router
    ) { }

  dateMoney!: RequestResponse;
  editarForm = new FormGroup({
    id: new FormControl(),
    codigoDivisa: new FormControl(''),
    nombre: new FormControl(''),
    tipoCambio: new FormControl()
});

  id: FormControl = new FormControl()
  codigoDivisa: FormControl = new FormControl('')
  nombre: FormControl = new FormControl('')
  tipoCambio: FormControl = new FormControl()

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>this.accessApi(data));

  }

  public accessApi(token: any){
    let id = this.id.value;
    let nombre = this.nombre.value;
    let codigoDivisa = this.codigoDivisa.value;
    let tipoCambio = this.tipoCambio.value;
    let resp=this.service.updateCurrency(token, id, nombre, codigoDivisa, tipoCambio);
    
    resp.subscribe(()=>{
      this.id.setValue
      this.nombre.setValue("")
      this.codigoDivisa.setValue("")
      this.tipoCambio.setValue
    });

  }

}
