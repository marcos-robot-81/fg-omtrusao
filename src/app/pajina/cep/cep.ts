import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports:[ReactiveFormsModule]
})
export class cepComponent {
  CepSevisor = inject(logica);
  CepDados: CerDados = {} as CerDados;

// variavel
  dados = new FormGroup({
    cep: new FormControl(''),
    lagadouro: new FormGroup(''),
  })
  material = "";
  valor = "";

  async buscar(){
    console.log("buscar");
    this.CepSevisor.validaCeo(this.dados.value.cep || "").then(abc1 => {this.obter()});

  }

  obter(){this.CepDados = this.CepSevisor.getdados();
  }

}