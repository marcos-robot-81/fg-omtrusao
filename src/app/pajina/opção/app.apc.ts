import { Component, inject } from "@angular/core"
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Mtc } from './../manuteção/mtc'
import { logica } from "../cep/cep.logica";
import { Router } from '@angular/router';


@Component({
    selector:"apc", //apção
    standalone: true, // Tornando o componente standalone
    imports: [CommonModule, NgOptimizedImage, RouterModule, Mtc], // Importando módulos necessários
    templateUrl:"./app.apc.html", // Caminho correto para o template do componente
    styleUrl:"app.apc.css"
    
})export class Apc{
    Dados = inject(logica)
    constructor(private router: Router) {}

    // Array de materiais com nome e caminho da imagem
    // Certifique-se de que as imagens existam na pasta 'src/midias'
    materials = [
        { name: 'Areia', image: 'midias/material/areia.png', width: 400, height: 300 },
        { name: 'Pedra Brita', image: 'midias/material/brita.png', width: 400, height: 300 },
       
    ];

    parsa(escolha: string){
        this.Dados.SetMaterialTipo( (escolha) );
        this.router.navigate(['/cep']);
    }

}