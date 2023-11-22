import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-verproductos',
  templateUrl: './verproductos.page.html',
  styleUrls: ['./verproductos.page.scss'],
})
export class VerproductosPage {

  firebaseService = inject(FirebaseService)
  utilsService = inject(UtilsService)

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
}
