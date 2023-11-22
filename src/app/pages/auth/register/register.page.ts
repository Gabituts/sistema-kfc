import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/users.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  firebaseService = inject(FirebaseService)
  utilsService = inject(UtilsService)
  router = inject(Router)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),

  })

  async registrarse(){
    console.log(this.form.value)
    
    //cargando
    const loading = await this.utilsService.loading();
    await loading.present();

    this.firebaseService.registrarse(this.form.value as User).then( async res =>{
      await this.firebaseService.actualizarUsuario(this.form.value.name as string)
      console.log(res)
      console.log('registro exitoso')
      this.router.navigate(['/verproductos'])

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
