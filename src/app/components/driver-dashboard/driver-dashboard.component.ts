import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-dashboard',
  imports: [CommonModule],
  templateUrl: './driver-dashboard.component.html',
  styleUrl: './driver-dashboard.component.scss'
})
export class DriverDashboardComponent {
  // Simulación interactiva integrada en el landing
  public isOnline = signal<boolean>(false);
  public currentOrder = signal<any | null>(null);
  public incomingRequest = signal<any | null>(null);
  public countdown = signal<number>(20);
  
  private timerInterval: any;
  public hasActiveDelivery = computed(() => this.currentOrder() !== null);

  public toggleDutyStatus(): void {
    this.isOnline.update(status => !status);
    
    if (this.isOnline() && !this.hasActiveDelivery()) {
      setTimeout(() => {
        if (this.isOnline()) this.triggerMockRequest();
      }, 1500);
    } else {
      this.clearSimulation();
    }
  }

  private triggerMockRequest(): void {
    this.incomingRequest.set({
      id: '1045',
      customerName: 'Ana Pérez',
      deliveryAddress: 'Calle 70, Edif. 4B, Los Palos Grandes',
      totalAmount: '24.50',
      items: '2x Roll de Sushi, 1x Té Frío'
    });
    this.countdown.set(20);

    this.timerInterval = setInterval(() => {
      this.countdown.update(time => {
        if (time <= 1) {
          this.rejectOrder();
          return 0;
        }
        return time - 1;
      });
    }, 1000);
  }

  public acceptOrder(): void {
    clearInterval(this.timerInterval);
    this.currentOrder.set(this.incomingRequest());
    this.incomingRequest.set(null);
  }

  public rejectOrder(): void {
    clearInterval(this.timerInterval);
    this.incomingRequest.set(null);
  }

  public confirmDelivery(): void {
    this.currentOrder.set(null);
    if (this.isOnline()) {
      setTimeout(() => this.triggerMockRequest(), 2500);
    }
  }

  private clearSimulation(): void {
    clearInterval(this.timerInterval);
    this.incomingRequest.set(null);
    this.currentOrder.set(null);
  }

}
