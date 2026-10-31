import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  phone: string = '584241874370'; 
  message: string = '';

   ngOnInit() {
    
    // 2. El texto que quieres recibir, convertido a formato seguro de URL
    const textoPlano = '¡Hola! Vi la página de Zlipmenu y quiero crear el menú digital interactivo para mi restaurante. ¿Cómo podemos iniciar la prueba gratis?';
    
    this.message = encodeURIComponent(textoPlano);
  }

}
