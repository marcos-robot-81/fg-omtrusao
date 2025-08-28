import { Component } from "@angular/core"
import { NgOptimizedImage } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
    selector:"apc",
    standalone: true,
    imports: [NgOptimizedImage, RouterModule],
    templateUrl:"./app.apc.html",
    styleUrl:"app.apc.css"
    
})export class Apc{
    materials = [
        { name: 'Areia', image: 'midias/areia.jpg', width: 400, height: 300 },
        { name: 'Pedra Brita', image: 'midias/pedra_brita.jpg', width: 400, height: 300 },
        { name: 'Cimento', image: 'midias/cimento.jpg', width: 400, height: 300 },
        { name: 'Tijolos', image: 'midias/tijolos.jpg', width: 400, height: 300 },
        { name: 'Ferro', image: 'midias/ferro.jpg', width: 400, height: 300 },
        { name: 'Madeira', image: 'midias/madeira.jpg', width: 400, height: 300 },
    ];
}