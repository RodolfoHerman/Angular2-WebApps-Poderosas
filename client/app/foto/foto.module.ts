import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';

@NgModule({
    declarations: [ FotoComponent ],
    //Quem importar o módulo só terá acesso aos artefatos do módulo que forem explicitados em exports
    exports: [ FotoComponent ]
})
export class FotoModule {

}