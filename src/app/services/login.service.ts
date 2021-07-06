import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dni: string;

  constructor() {
    this.cargarStorage();
   }

  guardarStorage(dni:string){
    localStorage.setItem('dni',dni);

    this.dni = dni;

  }

  cargarStorage(){
    if(localStorage.getItem('dni')){
      this.dni = localStorage.getItem('dni');
    }else{
      this.dni= '';
    }
  }

  estaLogueado(){
    return (this.dni.length > 7)? true:false;
  }

}
