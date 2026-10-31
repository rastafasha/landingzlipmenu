import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FeaturesComponent } from '../../components/features-component/features.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, } from '@angular/router';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition.component';
import { DemoSelectorComponent } from '../../components/demo-selector/demo-selector.component';
import { AdminDashboardComponent } from '../../components/admin-dashboard/admin-dashboard.component';
import { ProcessFlowComponent } from '../../components/process-flow/process-flow.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ScrollRevealDirective, FeaturesComponent,
    ProductDetailsComponent, PricingComponent, FooterComponent,
    ValuePropositionComponent, DemoSelectorComponent, AdminDashboardComponent, ProcessFlowComponent, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

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
