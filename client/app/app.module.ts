//O decorator NgModule importarmos o BrowserModule, através da propriedade imports. Isso indica que um módulo anotado com ngModule pode importar outros módulos também anotados com ngModule
import { NgModule } from '@angular/core';
//No caso, BrowserModule, ao ser carregado, já disponibiliza diversos recursos padrões do Angular sem termos que importar cada recurso individualmente como as diretivas ngIf e ngFor
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//NgModule transforma a classe ES6 em um MODULO do ANGULAR
@NgModule({
    //Como o modulo rodará no navegador é necessário importar o BrowserModule
    imports: [ BrowserModule ],
    //Declaretion é o que o modulo declara, ou seja, os componentes que fizerem parte do módulo, precisam ser registrados
    declarations: [ AppComponent ],
    //Indica qual será o primeiro componente carregado, nesse caso queremos que seja o AppComponent
    bootstrap: [ AppComponent ]
})
export class AppModule {}