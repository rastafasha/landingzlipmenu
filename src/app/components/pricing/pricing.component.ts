import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  irASeccion(id: string): void {
    // Esperamos un instante minúsculo para que se limpie la cola de ejecución del navegador
    setTimeout(() => {
      const elemento = document.getElementById(id);

      if (elemento) {
        elemento.scrollIntoView({
          behavior: 'smooth', // Hace el efecto de subida/bajada suave
          block: 'start',     // Alinea la sección al inicio de la pantalla
          inline: 'nearest'
        });
      } else {
        console.warn(`No se encontró ninguna sección con el ID: ${id}`);
      }
    }, 50);
  }

}
