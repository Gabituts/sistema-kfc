import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController)
  toastCtrl = inject(ToastController)
  router = inject(Router)

  //LOADING
  loading(){
    return this.loadingCtrl.create({spinner: 'crescent'})
  }

  //ERROR ALERTA
  async presentToast(opts?: ToastOptions){
    const toast = await this.toastCtrl.create(opts);
    toast.present()
  }

  //ENRUTAR
  routerLink(url:string){
    return this.router.navigateByUrl(url)
  }

  //GUARDAR ELEMENTO EN LOCAL
  guardarLocal(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  //OBETENER ELEMENTO EN LOCAL
  getLocal(key:string){
    // return JSON.parse(localStorage.getItem(key))


    const storedValue = localStorage.getItem(key)
    if (storedValue !== null ){
      return JSON.parse(storedValue)
    }else{
      return null
      console.log('ERROR ERROR ERROR NO SE GUARDA EN LA BD')
    }
  }

}
