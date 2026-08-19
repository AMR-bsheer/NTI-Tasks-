import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { Contactus } from './contactus/contactus';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, Contactus, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
