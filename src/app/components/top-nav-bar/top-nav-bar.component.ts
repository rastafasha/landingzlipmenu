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

  ngOnInit() {
    // Escucha de forma reactiva el fragmento (#) actual en la barra de direcciones
    this.route.fragment.subscribe(frag => {
      // Si el fragmento viene vacío (ej: al cargar por primera vez), asumimos 'inicio'
      this.fragmentoActivo = frag || 'inicio';
    });
  }

}
