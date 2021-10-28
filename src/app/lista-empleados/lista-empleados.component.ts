import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados!: Empleado[];
  constructor(
    private empleadosService: EmpleadosService
  ) { 
  }

  ngOnInit(): void {
    this.empleadosService.getAll().then(arrEmpleados=>{
      this.empleados = arrEmpleados
    })
  }

}
