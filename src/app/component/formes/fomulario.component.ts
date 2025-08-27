import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-formulario",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: "./formulario.component.html",
    styleUrl: "./formulario.component.css"
})
export class FormularioComponent {
    dados = new FormGroup({
        name: new FormControl('', Validators.required),
        testo: new FormControl(''),
    });

    // TODO: Substitua '5500000000000' pelo número de WhatsApp real.
    // É uma boa prática armazenar isso em variáveis de ambiente.
    numeroWhatsapp = '5500000000000';

    enviar(): void {
        if (this.dados.invalid) {
            this.dados.markAllAsTouched();
            // Considere usar um serviço de notificação ou um modal para uma melhor experiência do usuário.
            alert("Por favor, preencha o campo nome.");
            return;
        }

        const name = this.dados.value.name;
        const texto = this.dados.value.testo || "Gostaria de fazer um orçamento";

        const mensagem = `Olá, meu nome é ${name}. ${texto}`;

        const whatsappUrl = `https://wa.me/${this.numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

        window.open(whatsappUrl, '_blank');
    }
}