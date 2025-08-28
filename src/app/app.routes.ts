import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QueSomosComponent } from './pajina/queSomos/somos.component';
import { HomeComponent } from './pajina/home/home.component';
import { Apc } from './pajina/opção/app.apc';


export const routes: Routes = [

    {
        path:"",
        title:"Home",
        component: HomeComponent,
    },
    {
        path:"que-somos",
        title:"Que somos",
        component: QueSomosComponent,
    },
    {
        path: "apc",
        title: "material",
        component: Apc,
    }

];

