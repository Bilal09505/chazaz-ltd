import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer],
  template: `
    <app-navbar></app-navbar>
    
    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>
    
    <app-footer></app-footer>
  `,
})
export class App {
  
}
