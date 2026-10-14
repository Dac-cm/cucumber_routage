import { Routes } from '@angular/router';
import { ContactForm } from './contact-form/contact-form';
import { ContactResult } from './contact-result/contact-result';

export const routes: Routes = [
  { path: '', redirectTo: 'formulaire', pathMatch: 'full' },
  { path: 'formulaire', component: ContactForm },
  { path: 'resultat', component: ContactResult }
];