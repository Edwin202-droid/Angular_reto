import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorias: string[];
  productos: producto[];
  constructor(public productoService: ProductosService) { }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarProductos();
  }

  cargarCategorias(){
    this.productoService.obtenerCategorias().subscribe((resp:any) =>{
      this.categorias = resp;
    })
  }

  cargarProductos(){
    this.productoService.obtenerProductos().subscribe((resp:any)=>{
      this.productos = resp;
    });
  }

}
