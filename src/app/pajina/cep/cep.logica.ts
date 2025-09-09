import { Injectable } from "@angular/core";

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

@Injectable({
    providedIn: 'root'
}) export class logica{
    dados: CerDados = {} as CerDados;

convete(n: String) {
    console.log(n);
    this.dados = JSON.parse(n as string);
    console.log(this.dados.cep);
}    


async validaCeo(cep: string){
    console.log(cep);

    if((cep.length == 8) || true){
        console.log("valido");
        const url = "https://viacep.com.br/ws/"+cep+"/json/"
        const options = {
            method: 'GET',
        };
         fetch("https://viacep.com.br/ws/01001000/json/", options).then(response => {
            if (!response.ok) {
                return new Error("erro");
                console.log("erro :"+response.status);
            }
            if(!(response.status === 200)){
                return new Error("status "+response.status);
            }else{
                console.log("sucesso");
                let l = '';
            (response.text().then(text => {this.convete(text);}));
            return " sucesso";
            }

            return 'erro';
        })
    }
    
}

getdados(){return this.dados;}


}

