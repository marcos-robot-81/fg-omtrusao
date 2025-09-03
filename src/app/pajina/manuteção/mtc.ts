import { Component } from '@angular/core';

@Component({
    selector: 'mtc', //manutenção
    template: `
    <div id="div1">
        <div id="div2">
            <h1>Alenta</h1>
            <p>Essa pagina esta em manutenção</p>
        </div>
    </div>
    `,
    styles: [`

        #div1 {
              position: absolute;
              margin: -158px 0px 0px -30px;
              width: 100vw;
              height: 100vh;
              background-color: rgba(0,0,0,0.5);
              
        }
        #div2 {
            margin: 4rem auto ;
            z-index:2 ;
            max-width: 600px ;
            height: 200px ;
            text-align:center ;
            background-color : #f4f7f6;
            border-radius:8px;  
            padding:20px ;
            
        }
        h1{
            color:#ffffff;
            background-color:red;
            padding: 20px;
            border-radius: 10px;
            height: auto; 
        }
        `]
}) export class Mtc {

}