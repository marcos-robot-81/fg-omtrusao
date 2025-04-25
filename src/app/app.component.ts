import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ MenuComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
  img1 = 'ateroDeBrita.png';
}
