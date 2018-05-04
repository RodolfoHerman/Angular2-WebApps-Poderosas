//Para evitar erro de compilação, importamos a interface PipeTransform para realizar o contrato do método à classe
import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    //Para utilizar o PIPE no template utilizamos o que está escrito na tag 'name'
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    //Método responsável por realizar a transformação no elemento
    transform(fotos: FotoComponent[], digitado: string) {
       
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }

}