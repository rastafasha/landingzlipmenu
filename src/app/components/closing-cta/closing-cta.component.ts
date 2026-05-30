import { Component } from '@angular/core';

@Component({
  selector: 'app-closing-cta',
  imports: [],
  templateUrl: './closing-cta.component.html',
  styleUrl: './closing-cta.component.scss'
})
export class ClosingCtaComponent {
  phone: string = '584241874370'; 
  message: string = '';

  ngOnInit() {
    // 2. El texto que quieres recibir, convertido a formato seguro de URL
    const textoPlano = '¡Hola! Vi la página de Zlipmenu y quiero crear el menú digital interactivo para mi restaurante. ¿Cómo podemos iniciar la prueba gratis?';
    
    this.message = encodeURIComponent(textoPlano);
  }
}
