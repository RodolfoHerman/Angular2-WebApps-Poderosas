//O decorator NgModule importarmos o BrowserModule, através da propriedade imports. Isso indica que um módulo anotado com ngModule pode importar outros módulos também anotados com ngModule
import { NgModule } from '@angular/core';
//No caso, BrowserModule, ao ser carregado, já disponibiliza diversos recursos padrões do Angular sem termos que importar cada recurso individualmente como as diretivas ngIf e ngFor
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
//Importando o modulo de Http que fornece um provider do serviço HTTP
import { HttpModule } from '@angular/http';

//Necessário importar pois a função MAP não existe no OBSERVABLE em 'app.component.ts'
import 'rxjs/add/operator/map';

import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';

//Necessário para a utilização do [(ngModel)] para o two-way data binding e o ReactiveFormsModule para realizar a validação orientada a modelo
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//NgModule transforma a classe ES6 em um MODULO do ANGULAR
@NgModule({
    //Como o modulo rodará no navegador é necessário importar o BrowserModule
    imports: [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        routing, 
        FormsModule,
        ReactiveFormsModule
    ],
    //Declaretion é o que o modulo declara, ou seja, os componentes que fizerem parte do módulo, precisam ser registrados
    declarations: [ 
        AppComponent, 
        CadastroComponent, 
        ListagemComponent 
    ],
    //Indica qual será o primeiro componente carregado, nesse caso queremos que seja o AppComponent
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule {

}
//É necessário importar o provedor, provider, de HTTP. Provedores são serviços especializados na construção de objetos e que auxiliam o framework no processo de criação de objetos injetados, no caso será usado pelo Angular toda vez que um objeto do tipo Http for injetado com o decorator Inject