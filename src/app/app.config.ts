import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // 1. Aquí es donde se coloca 'onSameUrlNavigation' de forma válida en Angular moderno
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      // 🌟 Esta es la función correcta en las versiones modernas de Angular
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled',     // Activa el desplazamiento por anclas
        scrollPositionRestoration: 'enabled' // Restaura el scroll arriba al cambiar de página
      }),
      withComponentInputBinding() // Excelente práctica para capturar parámetros fácilmente
    )
  ]
};
