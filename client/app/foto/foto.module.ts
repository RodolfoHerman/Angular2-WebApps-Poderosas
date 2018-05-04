import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ],
    //Quem importar o módulo só terá acesso aos artefatos do módulo que forem explicitados em exports
    exports: [ FotoComponent, FiltroPorTitulo ]
})
export class FotoModule {

}