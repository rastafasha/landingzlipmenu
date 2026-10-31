import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface PaymentGateway {
  name: string;
  type: string;
  currency: string;
  status: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  // Signal para alternar la vista del Admin (Dashboard vs Métodos de Pago)
  activeTab = signal<'metrics' | 'payments'>('metrics');

  // Datos reales basados en la pág 25 del manual
  gateways: PaymentGateway[] = [
    { name: 'PayPal Checkout', type: 'paypal', currency: 'USD', status: 'Activo' },
    { name: 'FBA Zelle Directo', type: 'zelle', currency: 'USD', status: 'Activo' },
    { name: 'PagoMóvil Mercantil', type: 'pagomovil', currency: 'VES', status: 'Activo' },
    { name: 'Transferencia BOFA', type: 'banco', currency: 'USD', status: 'Activo' },
    { name: 'Efectivo en Caja', type: 'cash', currency: 'Multimoneda', status: 'Activo' }
  ];

  setTab(tab: 'metrics' | 'payments') {
    this.activeTab.set(tab);
  }
  
}
