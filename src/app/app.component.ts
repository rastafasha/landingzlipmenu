import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';
import { ClosingCtaComponent } from './components/closing-cta/closing-cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    TopNavBarComponent,
    HeroSectionComponent,
    FeaturedSectionComponent,
    ClosingCtaComponent,
    FooterComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landingZlipmenu';
}
