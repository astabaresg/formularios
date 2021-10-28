import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //ReactiveForms es lo que sirve para crear los formularios de Angular tipo model

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ModelComponent,
    FormularioComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
