import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-whatsapp-automatizacion',
  imports: [CommonModule],
  templateUrl: './whatsapp-automatizacion.component.html',
  styleUrl: './whatsapp-automatizacion.component.scss'
})
export class WhatsappAutomatizacionComponent {
  // Manejador del paso actual de la simulación del chat interactivo
  public step = signal<number>(0);

  public advanceChatSimulation(): void {
    if (this.step() < 2) {
      this.step.update(s => s + 1);
    }
  }

  // Permite resetear la simulación en caso de requerirse en el landing
  public resetSimulation(): void {
    this.step.set(0);
  }

}
