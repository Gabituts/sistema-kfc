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
    uid: new FormControl(''),
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
      let uid = res.user.uid
      this.form.controls.uid.setValue(uid);
        this.setInfoUser(uid);
      console.log(res)
      console.log('registro exitoso')
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

  async setInfoUser(uid:string){
    console.log(this.form.value)
    
    //cargando
    const loading = await this.utilsService.loading();
    await loading.present();

    let path = `users/${uid}`
    delete this.form.value.password

    this.firebaseService.setDocument(path, this.form.value).then( async res =>{
      this.utilsService.guardarLocal('user', this.form.value)
      //this.router.navigate(['/verproductos'])
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
