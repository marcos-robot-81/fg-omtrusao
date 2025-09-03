import { Component } from "@angular/core"
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
    selector:"apc", //apção
    standalone: true, // Tornando o componente standalone
    imports: [CommonModule, NgOptimizedImage, RouterModule], // Importando módulos necessários
    templateUrl:"./app.apc.html", // Caminho correto para o template do componente
    styleUrl:"app.apc.css"
    
})export class Apc{
    // Array de materiais com nome e caminho da imagem
    // Certifique-se de que as imagens existam na pasta 'src/midias'
    materials = [
        { name: 'Areia', image: 'midias/material/areia.png', width: 400, height: 300 },
        { name: 'Pedra Brita', image: 'midias/material/brita.png', width: 400, height: 300 },
        { name: 'Cimento', image: 'midias/cimento.jpg', width: 400, height: 300 },
        { name: 'Tijolos', image: 'midias/tijolos.jpg', width: 400, height: 300 },
        { name: 'Ferro', image: 'midias/ferro.jpg', width: 400, height: 300 },
        { name: 'Madeira', image: 'midias/madeira.jpg', width: 400, height: 300 },
        // Adicione mais materiais conforme necessário
    ];
}