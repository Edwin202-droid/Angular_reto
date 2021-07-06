import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) { }

  obtenerProductos(){
    return this.http.get(URL_SERVICIOS);
  }

  obtenerCategorias(){
    let urlCategoria =  URL_SERVICIOS + '/categories';
    return this.http.get(urlCategoria);
  }

  obtenerProductosCategoria(producto:string){
    let url = URL_SERVICIOS + '/category/' + producto;
    return this.http.get(url);
  }
}
