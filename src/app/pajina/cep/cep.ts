import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { logica } from './cep.logica';


interface CerDados{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

@Component({
  selector: 'cep', //manutenção
  standalone: true, // Tornando o componente standalone
  templateUrl: './cep.html', // Caminho correto para o template do componente
  styleUrl: 'cep.css',
  imports: [ReactiveFormsModule, FormsModule]
})
export class cepComponent {
  CepSevisor = inject(logica);
  CepDados: CerDados = {} as CerDados;

// variavel
  cep = '';
  estado = false;

  async buscar(){
    this.estado = true;
    this.CepSevisor.validaCeo(this.cep || "").then(abc1 => {this.obter()});

  }

  obter(){this.CepDados = this.CepSevisor.getdados();
  }

  enviar(){
    var numeroWhatsapp = '5581987739674';

    if(this.CepSevisor.material.tipo == undefined){
      window.alert(" Erro voite e celecione um material")
    }else{
      const mensagem = (
      `Solicitação de orçamento de entrega de material: ` + this.CepSevisor.material.tipo + `, para o endereço: ` + this.CepDados.cep
      );

      const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, '_blank');
    }

  }
  

}