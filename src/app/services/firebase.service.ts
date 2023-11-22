import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { User } from '../models/users.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query, updateDoc, deleteDoc } from '@angular/fire/firestore'
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore)

  // ---------------AUTENTIFICACION---------------

  //Obtener auntentificacion
  getAuth(){
    return getAuth();
  }

  //Iniciar sesion
  IniciarSesion(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //Registrarse
  registrarse(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //Actualizar Usuario
  actualizarUsuario(displayName: string) {
    const user = getAuth().currentUser;
    if (user) {
      return updateProfile(user, { displayName });
    } else {
      // Manejar el caso en el que el usuario es null, posiblemente lanzando un error o manejándolo de otra manera.
      console.error('Usuario no encontrado');
      return Promise.reject('Usuario no encontrado');
    }
  }

  // ---------------BASE DE DATOS---------------

  //Setear documento (devuelve con setdoc un doc con el path y la data)
  setDocument(path:string, data:any){
    return setDoc(doc(getFirestore(), path), data);
  }

  //Obtener documento
  async getDocument(path:string){
    return (await getDoc(doc(getFirestore(),path))).data()
  }

  //Obtener coleccion
  getColeccionData(path:string, collectionQuery?: any){
    const ref = collection(getFirestore(), path)
    return collectionData(query(ref, collectionQuery), {idField:'id'})
  }

  //Agregar documento - producto
  postDocument(path:string, data:any){
    return addDoc(collection(getFirestore(), path), data);
  }

  //Actualizar producto
  updateDocument(path:string, data:any){
    return updateDoc(doc(getFirestore(), path), data);
  }
  //Eliminar producto
  deleteDocument(path:string){
    return deleteDoc(doc(getFirestore(), path));
  }

}
