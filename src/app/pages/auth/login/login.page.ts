import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/users.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  firebaseService = inject(FirebaseService)
  utilsService = inject(UtilsService)
  router = inject(Router)


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  async ingresar(){
    console.log(this.form.value)
    
    //cargando
    const loading = await this.utilsService.loading();
    await loading.present();

    this.firebaseService.IniciarSesion(this.form.value as User).then(res =>{
      console.log(res)
      console.log('logueo exitoso')
      this.getInfoUser(res.user.uid)
      // this.router.navigate(['/verproductos'])
      this.utilsService.routerLink('/verproductos')

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

  async getInfoUser(uid:string){
    console.log(this.form.value)
    
    //cargando
    const loading = await this.utilsService.loading();
    await loading.present();

    let path = `users/${uid}`

    this.firebaseService.getDocument(path).then( user =>{
      this.utilsService.guardarLocal('user', user)
      //this.router.navigate(['/verproductos'])
      this.utilsService.presentToast({
        message: `Bienvenido`,
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
