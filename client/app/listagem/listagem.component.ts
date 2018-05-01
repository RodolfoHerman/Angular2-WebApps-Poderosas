//Um componente é a unidade de código que encapsula os dados, o comportamento e a apresentação.
//Componentes podem ser combinados entre si para criar recursos mais complexos, no entanto fáceis de manter.
//Em Angular, um componente nada mais é do que uma classe (ES6)
//Um componente precisa ter um template que guarde sua apresentação, incluindo um seletor que é uma maneira de referenciá-lo no template de outros componentes.
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    //Utilizando uma sintaxe menos verbosa
    fotos: Object[] = [];
    //fotos: Array<Object> = [];

    //Aqui é a realização da tipagem estática com o TypeScript
    //Ele reconhece que o parâmetro é do tipo 'http' e irá instancia-lo. Essa é uma forma menos verbosa como mostrado abaixo usando o @Inject(Http) http
    constructor(http: Http) {

        //Utilizar a arrow function que tem escopo lexico
        //o MAP foi importado em 'app.module.ts'.
        //O MAP em vez de tratar as fotos dentro do subscribe -> subscribe(function(res){ this.fotos = res.json() })
        //utilizamos o MAP para tratar o json e assim no parâmetro do subscribe temos certeza de que temos as fotos
        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos =>  this.fotos = fotos,
                error => console.log(error));
        // var contexto = this;
        // var stream = http.get('v1/fotos');
        // stream.subscribe(function(res) {
            //Foi necessário atriuir o contexto da instância AppComponent
            //pois se fosse utilizado apenas 'this.fotos = res.json()'
            //o this iria ter o contexto da função subscribe
        //     contexto.fotos = res.json();
        // });


    }
    //Usando a anotação '@Inject' antes do parâmetro do construtor, a variável 'http' receberá o serviço 'Http'. O Framework irá instancia-la tirando essa responsabilidade do desenvolvedor
    // constructor(@Inject(Http) http) {

    // }


}

//Uma arrow function é uma função anônima que possui uma sintaxe mais curta, quando comparada com a function expressions que usamos antes. Porém, o seu diferencial não é apenas a sintaxe enxuta: toda arrow function compartilha o mesmo this léxico de seu escopo pai.