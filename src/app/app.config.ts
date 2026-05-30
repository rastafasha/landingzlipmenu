import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // 🌟 Esta es la función correcta en las versiones modernas de Angular
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled',     // Activa el desplazamiento por anclas
        scrollPositionRestoration: 'enabled' // Restaura el scroll arriba al cambiar de página
      }),
      withComponentInputBinding() // Excelente práctica para capturar parámetros fácilmente
    )
  ]
};
