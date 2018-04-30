import { Component } from '@angular/core';
//O 'Input' indica quais as propriedades podem receber valores externos, ou seja, 
//é possível passar valores para elas
import { Input } from '@angular/core';

@Component({
    //Em vez de digitar o caminho completo relativo à pasta 'client'
    //ex.: templateUrl: './app/foto/foto.component.html'
    //Utilizamos o moduleId para pegar o caminho relativo à pasta do arquivo
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {

    @Input() titulo;
    @Input() url;

}