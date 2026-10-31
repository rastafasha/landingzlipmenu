import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface ProductItem {
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  icon: string;
}

@Component({
  selector: 'app-demo-selector',
  imports: [CommonModule],
  templateUrl: './demo-selector.component.html',
  styleUrl: './demo-selector.component.scss'
})
export class DemoSelectorComponent {

  // Signal para controlar el estado de la pestaña activa (basado en pág 8 del manual)
  activeDemo = signal<'panaderia' | 'restaurante'>('panaderia');

  // Datos reales extraídos de la carta del manual (pág 4 y 17)
  panaderiaProducts: ProductItem[] = [
    { name: 'Croissant de Nutella', category: 'Delicateses', price: '$8.40', oldPrice: '$9.20', icon: '🥐' },
    { name: 'Baguette Tradicional', category: 'Delicateses', price: '$3.50', oldPrice: '$4.20', icon: '🥖' },
    { name: 'Rol Glaseado de Canela', category: 'Roles', price: '$7.50', oldPrice: '$9.00', icon: '🌀' },
    { name: 'Palmeritas Crujientes', category: 'Dulces Secos', price: '$5.00', icon: '🥮' }
  ];

  restauranteProducts: ProductItem[] = [
    { name: 'Pizza Margherita Grande', category: 'Pizzas', price: '$8.00', icon: '🍕' },
    { name: 'Pizza Hawai Especial', category: 'Pizzas', price: '$10.00', icon: '🍍' },
    { name: 'Prosciutto Premium', category: 'Pizzas', price: '$9.00', icon: '🥓' },
    { name: 'Té de Durazno Frío', category: 'Bebidas', price: '$6.00', icon: '🍹' }
  ];

  // Alternar el estado usando Signals
  setDemo(type: 'panaderia' | 'restaurante') {
    this.activeDemo.set(type);
  }

}
