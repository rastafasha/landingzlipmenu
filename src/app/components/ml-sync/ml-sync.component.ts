import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ml-sync',
  imports: [CommonModule],
  templateUrl: './ml-sync.component.html',
  styleUrl: './ml-sync.component.scss'
})
export class MlSyncComponent {

  public isSyncing = signal<boolean>(false);
  
  // Objeto simulado para el catálogo
  public productMock = signal<any>({
    title: 'Pizza Familiar Margarita',
    price: '14.99',
    stock: 24
  });

  public triggerSyncSimulation(): void {
    if (this.productMock().stock <= 0) {
      this.productMock.update(p => ({ ...p, stock: 24 }));
      return;
    }

    this.isSyncing.set(true);

    // Simular que descuenta una unidad en el ERP local de Zlipmenu
    this.productMock.update(p => ({ ...p, stock: p.stock - 1 }));

    // Simular el retraso del Wrapper de la API oficial (retransmitiendo a MELI)
    setTimeout(() => {
      this.isSyncing.set(false);
    }, 2000);
  }

}
