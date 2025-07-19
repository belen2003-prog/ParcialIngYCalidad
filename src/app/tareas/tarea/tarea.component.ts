import { Component, Input, inject } from '@angular/core';
import { type Tarea } from './tarea.model';
import { TarjetaComponent } from "../../compartida/tarjeta/tarjeta.component";
import { DatePipe } from '@angular/common';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [TarjetaComponent, DatePipe],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})

export class TareaComponent {
  @Input({required: true}) tarea!: Tarea;
  private tareasService = inject(TareasService); 

  alCompletarTarea(){
    this.tareasService.eliminarTarea(this.tarea.id);
  }
}
