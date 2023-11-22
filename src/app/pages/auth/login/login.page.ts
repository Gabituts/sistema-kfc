import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  // firebaseService = inject(FirebaseService)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor() { }


  ingresar(){
    console.log(this.form.value)
    // this.firebaseService.IniciarSesion(this.form.value as User).then(res =>{
    //   console.log(res)
    // })
  }





}
