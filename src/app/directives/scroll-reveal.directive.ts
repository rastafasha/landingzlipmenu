import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';


@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective {

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const target = this.el.nativeElement;
    
    // Buscar si hay elementos internos marcados para escalonado
    const staggerItems = target.querySelectorAll('.bento-stagger');

    if (staggerItems.length > 0) {
      // Si existen hijos para escalonar, los preparamos uno por uno con retraso dinámico
      staggerItems.forEach((item: any, index: number) => {
        this.renderer.addClass(item, 'apple-3d-card');
        this.renderer.setStyle(item, 'transition-delay', `${index * 0.12}s`);
      });
    } else {
      // Si es un componente único en bloque, se anima completo
      this.renderer.addClass(target, 'apple-3d-card');
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (staggerItems.length > 0) {
            staggerItems.forEach((item: any) => {
              this.renderer.addClass(item, 'apple-3d-active');
            });
          } else {
            this.renderer.addClass(target, 'apple-3d-active');
          }
          this.observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.05, // Se dispara apenas asoma el borde superior
      rootMargin: '0px 0px -100px 0px'
    });

    this.observer.observe(target);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
