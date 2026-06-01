import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent implements OnInit{

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
