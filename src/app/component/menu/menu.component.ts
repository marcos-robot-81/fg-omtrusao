import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'meno', // É uma boa prática usar um prefixo como 'app-' (ex: 'app-menu')
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="menu-nav">
      <a class="menu-titulo" routerLink="/">Figueredo Construção</a>
      <ul class="menu-links">
        <li><a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
        <li><a routerLink="/que-somos" routerLinkActive="active-link">Quem Somos</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .menu-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #2c3e50; /* Um cinza-azulado escuro */
      color: #ecf0f1; /* Um branco suave para o texto */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .menu-titulo {
      font-size: 2rem;
      font-weight: bold;
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s;
    }

    .menu-titulo:hover {
      color: #3498db; /* Um azul brilhante para o efeito hover */
    }

    .menu-links {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      gap: 25px;
    }

    .menu-links a {
      color: #ecf0f1;
      text-decoration: none;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s, color 0.3s;
      position: relative;
    }

    .menu-links a.active-link {
      color: #3498db; /* Destaca o link ativo */
      font-weight: bold;
    }
  `]
})
export class MenuComponent {

}