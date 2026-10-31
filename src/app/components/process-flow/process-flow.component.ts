import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-process-flow',
  imports: [CommonModule],
  templateUrl: './process-flow.component.html',
  styleUrl: './process-flow.component.scss'
})
export class ProcessFlowComponent {
  // Signal para alternar entre la vista del Comprador y el Negocio
  currentPerspective = signal<'cliente' | 'comercio'>('cliente');

  setPerspective(type: 'cliente' | 'comercio') {
    this.currentPerspective.set(type);
  }

}
