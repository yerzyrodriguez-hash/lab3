import { Component } from '@angular/core';
import { Productoservice } from '../core/services/productoservice';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  //declaramos una variables para recibir la data del backend
  productos:any[]=[];
  /**
   *
   */
  // creamo un constructor para llamar a nuestro servicio
  constructor(private productoService:Productoservice) {
        this.listarProductos();
  }
  //creamos un metodo para listar productos desde el servicio
  listarProductos():void
  {
    this.productoService.listaProductos().subscribe({
      next:(data)=> {
        this.productos = data
        console.log(this.productos);
      },
      error:(err)=>console.error('error al cargar productos',err)
    })
  }

}