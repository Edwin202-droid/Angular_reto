import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;
  dni: string;

  constructor(public router: Router,
              public loginService:LoginService) { }

  ngOnInit() {
  }

  login(form:NgForm){
    if(form.invalid){return;}


    localStorage.setItem('dni', this.dni);
    this.router.navigate(['/home']);
  }

}
