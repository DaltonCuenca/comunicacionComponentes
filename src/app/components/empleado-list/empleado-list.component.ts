import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleado: Empleado[]=[
    {legajo:1,nombre:'Dalton',apellido:'Cuenca',sexo:'Masculino',salario:200},
    {legajo:2,nombre:'Gloria',apellido:'Soria',sexo:'Femenino',salario:400},
    {legajo:3,nombre:'Adelaida',apellido:'Montoro',sexo:'Femenino',salario:200},
    {legajo:4,nombre:'Milagros',apellido:'Mateu',sexo:'Femenino',salario:150},
    {legajo:5,nombre:'Diego',apellido:'Sanmartin',sexo:'Masculino',salario:320}
  ]
  radioButtonSeleccionado='Todos';
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleador():number{
    return this.listEmpleado.length;
  }
  obtenerTotalFemenino():number{
    return this.listEmpleado.filter(list=>list.sexo==='Femenino').length;
  }
  obtenerTotalMasculino():number{
    return this.listEmpleado.filter(list=>list.sexo==='Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSeleccionado:string):void{
    this.radioButtonSeleccionado=radioButtonSeleccionado;
  }
}
