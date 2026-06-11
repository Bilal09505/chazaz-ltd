import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <app-navbar></app-navbar>
    
    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>
    
    <app-footer></app-footer>
  `,
})
export class App {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Chazaz Ltd - Professional Security Services in the UK');

    this.meta.addTags([
      { name: 'description', content: 'Chazaz Ltd is a UK-registered security company based in Wembley, London. SIA licensed security guards, door supervision, close protection and static guarding across the UK.' },
      { name: 'keywords', content: 'security company UK, security guards UK, professional security services, event security, property security, Chazaz Ltd' },
      { property: 'og:title', content: 'Chazaz Ltd - Professional Security Services in the UK' },
      { property: 'og:description', content: 'Chazaz Ltd provides professional security guards and security services across the UK. Reliable, trained personnel for businesses, events, and properties.' },
      { property: 'og:url', content: 'https://chazaz-ltd-store.web.app/' }
    ]);
  }
}
