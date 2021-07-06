import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria: string;
  productos: producto[];

  constructor(private productoService:ProductosService,
              private activeRoute: ActivatedRoute ) {
               }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      this.categoria= params['categoria'];
    })
    this.cargarProductoCategoria();
  }

  cargarProductoCategoria(){
    this.productoService.obtenerProductosCategoria(this.categoria).subscribe((resp:any)=>{
      this.productos= resp;
    });
  }
}
