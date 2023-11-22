import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage{

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



  async cargarProducto(){
    console.log(this.form.value)
    
    //cargando
    const loading = await this.utilsService.loading();
    await loading.present();

    //Definir donde se van a guardar los productos
    let path = `productos`
    delete this.form.value.id

    this.firebaseService.postDocument(path, this.form.value as Producto).then( async res =>{
      this.utilsService.presentToast({
        message: `Producto agregado exitosamente`,
        duration: 1500,
        color: 'primary',
        position: 'middle'
      })

    }).catch(error =>{
      console.log(error);
      this.utilsService.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: 'middle'
      })
    }).finally(() => {
      loading.dismiss();
    })
  }

}

