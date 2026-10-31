import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  private route = inject(ActivatedRoute);
  fragmentoActivo: string = 'inicio';
  phone: string = '584241874370'; 
  message: string = '';

  ngOnInit() {
    // Escucha de forma reactiva el fragmento (#) actual en la barra de direcciones
    this.route.fragment.subscribe(frag => {
      // Si el fragmento viene vacío (ej: al cargar por primera vez), asumimos 'inicio'
      this.fragmentoActivo = frag || 'inicio';
    });
    // 2. El texto que quieres recibir, convertido a formato seguro de URL
    const textoPlano = '¡Hola! Vi la página de Zlipmenu y quiero crear el menú digital interactivo para mi restaurante. ¿Cómo podemos iniciar la prueba gratis?';
    
    this.message = encodeURIComponent(textoPlano);
  }

}
