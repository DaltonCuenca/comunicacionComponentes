import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos:number=0;
  @Input() masculino:number=0;
  @Input() femenino:number=0;
  @Output() countRadioButtonChange=new EventEmitter<string>();
  constructor() { }
  radioButtonSeleccionado='Todos';

  ngOnInit(): void {
  }
  radioChange():void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }

}
