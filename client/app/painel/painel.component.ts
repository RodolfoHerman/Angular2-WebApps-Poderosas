import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {

    //Aqui é a definição de uma inbound property, isso significa que podemos passar para o componente um título através da view 
    @Input() titulo: string;

    //O OnInit é chamado assim que todo o componente é carregado. Caso fosse colocada a expressão abaixa no construtor da classe, a propriedade 'titulo' ainda não teria seu valor definido e daria erro mostrando que o titulo é 'undefined'. o decorator Input só recebe os dados associados à propriedade depois da chamada do construtor.
    ngOnInit() {

        this.titulo = this.titulo.length > 7 ? 
            `${this.titulo.substr(0, 7)}...` :
            this.titulo;
    }
}