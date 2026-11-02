import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

interface Slide {
  title: string;
  description: string;
  tagline: string;
  imgUrl: string;
}

@Component({
  selector: 'app-value-proposition',
  imports: [CommonModule],
  templateUrl: './value-proposition.component.html',
  styleUrl: './value-proposition.component.scss'
})
export class ValuePropositionComponent {

  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;
  currentIndex = 0;

  slides: Slide[] = [
    {
      title: 'ERP & POS',
      tagline: 'Punto de venta y control administrativo unificado.',
      description: 'Monitorea stock, ventas e inventario masivo en tiempo real de forma ágil desde un dashboard centralizado.',
      imgUrl: 'assets/admin/dashboard.webp'
    },
    {
      title: 'CRM Nativo',
      tagline: 'Conoce las preferencias de tus compradores.',
      description: 'Mantén un historial claro de consumos, analiza métricas y genera estrategias efectivas para fidelizar a tus clientes.',
      imgUrl: 'assets/admin/usuarios.webp'
    },
    {
      title: 'WhatsApp Everywhere',
      tagline: 'Automatización y recepción de pedidos directo al chat.',
      description: 'Un flujo sin fricciones que estructura las compras de tus clientes directamente hacia el canal del negocio.',
      imgUrl: 'assets/admin/messWhatsap.webp'
    },
    {
      title: 'Multimoneda & Pago Directo',
      tagline: 'Muestra precios en múltiples divisas en tiempo real.',
      description: 'Habilita pagos directos de forma transparente. Opciones de tasas Euro, Dolar Bcv (actualización automatica) y personalizadas',
      imgUrl: 'assets/admin/transferencias.webp'
    }
  ];

 nextSlide(): void {
  if (this.carouselTrack) {
    // Ajustamos a 0.52 para que coincida exactamente con el nuevo ancho del CSS
    const scrollAmount = this.carouselTrack.nativeElement.clientWidth * 0.52 + 24;
    this.carouselTrack.nativeElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

prevSlide(): void {
  if (this.carouselTrack) {
    const scrollAmount = this.carouselTrack.nativeElement.clientWidth * 0.52 + 24;
    this.carouselTrack.nativeElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

}
