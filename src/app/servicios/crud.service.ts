import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleados } from './modelos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/empleados/';
  constructor(
    private conexionservicio:HttpClient
  ) { 
  }

  agregarEmpleado(datosEmpleado:empleados):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertar=1",datosEmpleado);
  }//https://institutequasar.com/apiBlog/categoria.php

  editarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.conexionservicio.post(this.API+"?actualizar="+id,datosEmpleado);
  }

  consultarEmpleado(){
    return this.conexionservicio.get(this.API);
  }

//Ningun
  borrarEmpleado(id:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?borrar="+id);
  }

 

  obtenerEmpleado(id:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?consultar="+id);
  }
}
