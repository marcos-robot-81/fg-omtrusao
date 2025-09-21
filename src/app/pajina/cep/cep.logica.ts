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

interface material{
    tipo: string;
}

@Injectable({
    providedIn: 'root'
}) export class logica{
    dados: CerDados = {} as CerDados;
    material: material = {} as material;

convete(n: String) {
    console.log(n);
    console.log("------ json")
    let da = JSON.parse(n as string);
    console.log(da);
    this.dados.cep = da.cep;
    this.dados.logradouro = da.logradouro;
    this.dados.complemento = da.complemento;
    this.dados.bairro = da.bairro;
    this.dados.localidade = da.localidade;
    this.dados.uf = da.uf;
    this.dados.ibge = da.ibge;
    this.dados.gia = da.gia;
    this.dados.ddd = da.ddd;
    this.dados.siafi = da.siafi;
}    


async validaCeo(cep: string){

    if((cep.length == 8)){
        const url = "https://viacep.com.br/ws/"+cep+"/json/"
        const options = {
            method: 'GET',
        };
         fetch(url, options).then(response => {
            if (!response.ok) {
                console.log("erro :"+response.status);
                return new Error("erro");
            }
            if(!(response.status === 200)){
                return new Error("status "+response.status);
            }else{
                console.log("sucesso");
                let l = '';
            (response.text().then(text => {this.convete(text);}));
            return " sucesso";
            }
        })
    }
    
}

getdados(){return this.dados;}

SetMaterialTipo(tipo: string){
    this.material.tipo = tipo;
}





}

