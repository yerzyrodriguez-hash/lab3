import { Component } from '@angular/core';
import { Productoservice } from '../core/services/productoservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- 1. IMPORTAR FORMSMODULE
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  //declaramos una variables para recibir la data del backend
  productos:any[]=[];
  /**
   *
   */
  // Objeto para enlazar (bind) al formulario -------------------------
  nuevoProducto: any = {
    nombre: '',
    precio: 0.0,
    categoria_id: 1 // Asume un ID, o puedes mejorarlo con un <select>
  };
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

  // Método para manejar el envío del formulario -----------------------
  guardarProducto(): void {
    // Llama al servicio con los datos del formulario
    this.productoService.crearProducto(this.nuevoProducto).subscribe({
      next: (data) => {
        console.log('Producto creado exitosamente!', data);
        // Recarga la lista de productos para mostrar el nuevo
        this.listarProductos(); 
        // Limpia el formulario
        this.nuevoProducto = { nombre: '', precio: 0.0, categoria_id: 1 };
      },
      error: (err) => console.error('Error al crear producto', err)
    });
  }

}