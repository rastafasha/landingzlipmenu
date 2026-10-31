import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-anti-fraude',
  imports: [CommonModule],
  templateUrl: './anti-fraude.component.html',
  styleUrl: './anti-fraude.component.scss'
})
export class AntiFraudeComponent {
  public isProtectionActive = signal<boolean>(true);
  public isAnalyzing = signal<boolean>(false);
  public incomingTx = signal<any | null>(null);

  // Lista inicial de transacciones simuladas
  public verifiedTransactions = signal<Array<any>>([
    { method: 'Pago Móvil (Banesco)', reference: '8834', amount: '18.20', status: 'VERIFIED', timestamp: 'Hace 2 min' },
    { method: 'Zelle Payment', reference: '0942', amount: '45.00', status: 'VERIFIED', timestamp: 'Hace 5 min' },
    { method: 'Pago Móvil (Mercantil)', reference: '5512', amount: '12.50', status: 'BLOCKED', timestamp: 'Hace 12 min' }
  ]);

  // Ejecuta la simulación visual interactiva
  public triggerSimulation(): void {
    this.isAnalyzing.set(true);
    
    // Simula una transacción sospechosa (ejemplo: referencia duplicada de pago móvil)
    this.incomingTx.set({
      method: 'Pago Móvil (BBVA)',
      reference: '8834', // Duplicada a propósito
      amount: '32.00'
    });

    setTimeout(() => {
      // El algoritmo detecta el fraude y añade el registro bloqueado al inicio de la lista
      this.verifiedTransactions.update(list => [
        { 
          method: this.incomingTx().method, 
          reference: this.incomingTx().reference, 
          amount: this.incomingTx().amount, 
          status: 'BLOCKED', 
          timestamp: 'Ahora mismo' 
        },
        ...list
      ]);
      this.isAnalyzing.set(false);
      this.incomingTx.set(null);
    }, 2500);
  }

}
