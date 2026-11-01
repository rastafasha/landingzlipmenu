import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  // Guardamos el slide que está actualmente en pantalla (empieza en cero)
    currentSlide = 0;
    autoplayInterval: any; // Guardará la referencia del temporizador
  
  
    // Las 6 capturas de pantalla de Klyntic Paciente
    public adminScreens = signal([
    { url: 'assets/admin/dashboard.webp', title: 'Dashboard Principal', desc: 'Comportamiento diario y mensual de las ventas.' },
    { url: 'assets/admin/slide_tiendas.webp', title: 'Gestión de Sucursales', desc: 'Administración de comandas en proceso (INPROCESS).' },
    { url: 'assets/admin/slide_productos.webp', title: 'Control de Catálogo', desc: 'Edición rápida de precios, stock y categorías.' },
    { url: 'assets/admin/transferencias.webp', title: 'Auditoría de Caja', desc: 'Conciliación de Pago Móvil, Zelle y transferencias.' }
  ]);



  // Función nativa para cambiar de diapositiva
//   goToSlide(index: number): void {
//     this.currentSlide = index;
//   }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay(); // Limpieza crucial en Angular al destruir el componente
  }

  // Inicia el movimiento automático cada 4.5 segundos
  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.adminScreens.length;
    }, 4500);
  }

  // Detiene el temporizador para que no interfiera
  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  // Permite al usuario interactuar manualmente con los puntos
  goToSlide(index: number): void {
    this.currentSlide = index;
    this.stopAutoplay(); // Pausa el autoplay temporalmente si el usuario hace clic
    this.startAutoplay(); // Lo reinicia para mantener el flujo constante
  }

}
