import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'meno',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="menu-nav">
      <a class="menu-titulo" routerLink="/">Figueredo Construção</a>
      <button class="menu-hamburger" (click)="toggleMenu()" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="menu-links" [class.open]="menuOpen">
        <li><a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a></li>
        <li><a routerLink="/que-somos" routerLinkActive="active-link" (click)="closeMenu()">Quem Somos</a></li>
        <li><a routerLink="/apc" routerLinkActive="active-link" (click)="closeMenu()">Materias</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .menu-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #2c3e50;
      color: #030607ff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: relative;
    }

    .menu-titulo {
      font-size: 2rem;
      font-weight: bold;
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s;
    }

    .menu-titulo:hover {
      color: #3498db;
    }

    .menu-links {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      gap: 25px;
      transition: right 0.3s;
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
      color: #3498db;
      font-weight: bold;
    }

    .menu-hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1001;
    }
    .menu-hamburger span {
      display: block;
      width: 28px;
      height: 4px;
      margin: 4px 0;
      background: #ecf0f1;
      border-radius: 2px;
      transition: 0.3s;
    }

    /* Responsivo */
    @media (max-width: 700px) {
      .menu-links {
        flex-direction: column;
        position: absolute;
        top: 100%;
        right: -300px;
        background: #2c3e50;
        width: 200px;
        padding: 1rem 0;
        gap: 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transition: right 0.3s;
        z-index: 1000;
        border-radius: 0 0 8px 8px;
      }
      .menu-links.open {
        right: 0;
      }
      .menu-links li {
        margin: 0;
        padding: 0;
        text-align: left;
      }
      .menu-links a {
        display: block;
        width: 100%;
        padding: 1rem 2rem;
      }
      .menu-hamburger {
        display: flex;
      }
    }
  `]
})
export class MenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}