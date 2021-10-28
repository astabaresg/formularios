import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ModelComponent } from './model/model.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/model'},
  { path: 'template', component: TemplateComponent },
  { path: 'model', component: ModelComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'list', component: ListaEmpleadosComponent },
  { path: '**', redirectTo: 'model' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
