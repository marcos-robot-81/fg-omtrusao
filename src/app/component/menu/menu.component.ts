import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@Component({
selector:'meno',
imports:[RouterModule],
template:`
<nav>
    <div id="div-menu">
        <a id='menu-titulo'>Figueredo comtrução</a>
    </div>
    <ul>
        <li><a routerLink="/" >Home</a></li>
        <li><a routerLink="/que-somos" >Que somos</a></li>
    </ul>
</nav>
`,
styles:[`
    nav{
        
        
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        position: relative;
        justify-content: center;
        z-index: 3;
    }
    li {
        background-color:rgb(255, 255, 255);
        margin-left: 10px;
        padding: 10px;
    }
    li a{
        text-decoration: none;
        color: black;
        font-size: 30px;
    }
    #div-menu{
        display: flex;
        justify-content: center;}
    #menu-titulo{
        text-decoration: none;
        color: black;
        font-size: 40px
    }
    
    `]
})
export class MenuComponent {

}