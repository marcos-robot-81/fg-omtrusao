import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "app-formulario",
    imports: [ReactiveFormsModule],
    templateUrl: "./formulario.component.html",
    styleUrl: "./formulario.component.css"
})
export class FormularioComponent {
    dados = new FormGroup({
        name: new FormControl(''),
        testo: new FormControl(''),
    });
    nomero = 'Nomer'
    mesagem = ""
    enviar() {
        if((this.dados.value.name == '' || this.dados.value.name == null) != true){
        this.mesagem += "Ola meu nome e: %20"+ this.dados.value.name+",%20";
        if(this.dados.value.testo != ''){
            this.mesagem += this.dados.value.testo;
        }else{
            this.mesagem += "Gostaria de fazer um oçamento";
        };
        
        this.mesagem = this.mesagem.replace(/ /g, "%20");
        window.open(`https://wa.me/${this.nomero}?text=${this.mesagem}`)
        }else{
            window.alert("Preencha o campo nome")
        }
    };
}