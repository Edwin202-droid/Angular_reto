import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    dni:''
  }

  constructor(public router: Router,
              public loginService:LoginService) { }

  ngOnInit() {
  }

  ingresar(forma:NgForm){
    if(forma.invalid){return;}

    console.log(forma.value.dni);

    this.loginService.guardarStorage(forma.value.dni);

  }

}
