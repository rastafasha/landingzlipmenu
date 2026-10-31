import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

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

  irASeccion(id: string): void {
  // Esperamos un instante minúsculo para que se limpie la cola de ejecución del navegador
  setTimeout(() => {
    const elemento = document.getElementById(id);
    
    if (elemento) {
      elemento.scrollIntoView({ 
        behavior: 'smooth', // Hace el efecto de subida/bajada suave
        block: 'start',     // Alinea la sección al inicio de la pantalla
        inline: 'nearest' 
      });
    } else {
      console.warn(`No se encontró ninguna sección con el ID: ${id}`);
    }
  }, 50);
}

}
