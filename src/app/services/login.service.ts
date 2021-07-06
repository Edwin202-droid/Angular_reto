import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dni: string;

  constructor(private router:Router) {
    this.cargarStorage();
   }

  guardarStorage(dni:string){
    localStorage.setItem('dni',dni);

    return this.router.navigate(['/home']);
  }

  cargarStorage(){
    if(localStorage.getItem('dni')){
      this.dni = localStorage.getItem('dni');
    }else{
      this.dni= '';
    }
  }

  estaLogueado(){
    return (this.dni.length == 8)? true:false;
  }

  logOut(){
    localStorage.removeItem('dni');
    this.router.navigate(['/login']);
  }

}
