import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './moduloempleados/agregar/agregar.component';
import { EditarComponent } from './moduloempleados/editar/editar.component';
import { ListarComponent } from './moduloempleados/listar/listar.component';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'listarempleados'},
  {path:'listarempleados', component:ListarComponent},
  {path: 'agregarempleado', component:AgregarComponent},
  {path:'editarempleado/:id', component:EditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
