import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  // AUTENTIFICACION

  //Iniciar sesion
  IniciarSesion(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //Registrarse
  registrarse(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //Actualizar Usuario
  actualizarUsuario(displayName: string ){
    // return updateProfile(getAuth().currentUser, {displayName})
  }
}
