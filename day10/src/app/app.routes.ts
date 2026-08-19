import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Contactus } from './contactus/contactus';
import { Databinding } from './features/databinding/databinding';
import { ControlFlowDemoComponent } from './features/control-flow-demo/control-flow-demo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: Contactus },
  { path: 'databinding', component: Databinding },
  { path: 'control-flow', component: ControlFlowDemoComponent },
];
