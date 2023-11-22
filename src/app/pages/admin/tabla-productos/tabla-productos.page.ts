import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.page.html',
  styleUrls: ['./tabla-productos.page.scss'],
})
export class TablaProductosPage {

  firebaseService = inject(FirebaseService)
  utilsService = inject(UtilsService)
  router = inject(Router)

  form = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    precio: new FormControl(0, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
  })

  ionViewWillEnter(){
    this.getProducts()
  }


//FUNCION PARA OBTENER PRODUCTOS
productos: Producto[] = [];

  getProducts(){
    let path = `productos`
    let sub = this.firebaseService.getColeccionData(path).subscribe({
      next: (res:any) =>{
        console.log(res)
        this.productos = res
        sub.unsubscribe()
      }
    })
  }

  // FUNCION PARA EDITAR PRODUCTO
  seleccionarProductoEditar(producto:Producto){
    this.form.setValue(producto)
  }

  // FUNCION APLICAR CAMBIOS
  aplicarCambios(){
    console.log(this.form.value)
    let path:string = `productos/${this.form.value.id}` || ''
    let producto:any = this.form.value 
    console.log('este es el path',path)
    this.firebaseService.updateDocument(path, producto)
    this.getProducts()
  }

  // FUNCION PARA ELIMINAR PRODUCTO
  eliminarProducto(id:string){
    let path:string = `productos/${id}` || '';
    this.firebaseService.deleteDocument(path)
    this.getProducts()
  }


}
