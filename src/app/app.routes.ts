import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TerminosComponent } from './pages/legal/terminos/terminos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'terminos', component: TerminosComponent },
  { path: '**', component: HomeComponent },
];
