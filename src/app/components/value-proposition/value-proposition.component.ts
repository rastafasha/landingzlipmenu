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
      imgUrl: 'assets/admin/atencion_local.png'
    },
    {
      title: 'CRM Nativo',
      tagline: 'Conoce las preferencias de tus compradores.',
      description: 'Administra los pedidos de tus compradores, manten siempre el orden.',
      imgUrl: 'assets/admin/pedidos.png'
    },
    {
      title: 'WhatsApp Everywhere',
      tagline: 'Automatización y recepción de pedidos directo al chat.',
      description: 'Un flujo sin fricciones que estructura las compras de tus clientes directamente hacia el canal del negocio.',
      imgUrl: 'assets/admin/messWhatsap.webp'
    },
    {
      title: 'Multiples tipos de pago',
      tagline: 'Tus preferencias de pago siempre a la vista.',
      description: 'Habilita pagos directos de forma transparente. ',
      imgUrl: 'assets/admin/tiposPago.png'
    },
    {
      title: 'Multimoneda & Pago Directo',
      tagline: 'Muestra precios en múltiples divisas en tiempo real.',
      description: 'Opciones de tasas Euro, Dolar Bcv (actualización automatica) y tasas personalizadas',
      imgUrl: 'assets/admin/transferencias.png'
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
