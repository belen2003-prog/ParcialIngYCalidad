import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TareaNuevaInfo } from '../tarea/tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea-nueva',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea-nueva.component.html',
  styleUrl: './tarea-nueva.component.css'
})

export class TareaNuevaComponent {
  @Input({required: true}) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();  
  tituloIngresado = '';
  resumenIngresado = '';
  fechaExpiracionIngresada = '';
  //Otra forma de instanciar el servicio
  private tareaService = inject(TareasService);

  alCancelar(){
    this.cerrar.emit();
  }

  alEnviar() {
    this.tareaService.agregarTarea({
      titulo: this.tituloIngresado,
      resumen: this.resumenIngresado,
      fecha: this.fechaExpiracionIngresada
    }, this.idUsuario);
      this.cerrar.emit();

  };
}
