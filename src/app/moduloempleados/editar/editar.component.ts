import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formularioempleado: FormGroup;
  elID:any;
  constructor(
    public formulario:FormBuilder,
    private rutaactiva:ActivatedRoute,
    private servicio:CrudService
  ) { 
    this.elID=this.rutaactiva.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.formularioempleado = this.formulario.group(
      {
        nombre: [''],
        correo: ['']
      }
    );

    this.servicio.obtenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioempleado.setValue(
          {
            nombre: respuesta[0]['nombre'],
            correo: respuesta[0]['correo']
          }          
        );
      }
    );
  }

  ngOnInit(): void {
  }

  enviarInfo():any{
    console.log(this.elID);
    console.log(this.formularioempleado.value);

    this.servicio.editarEmpleado(this.elID,this.formularioempleado.value).subscribe(
      ()=>{
        
      }
    );    
  }
}
