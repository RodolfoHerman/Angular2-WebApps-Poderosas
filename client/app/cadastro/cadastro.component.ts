import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();

    constructor(private http: Http) {}


    cadastrar(event) {

        event.preventDefault();

        //Necessário informar o tipo de dado a ser enviado para o servidor
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        //Necessário passar o objeto JavaScript para o dado formato JSON.
        //O servidor retorna uma resposta para o cliente através do SUBSCRIBE
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
            .subscribe(
                () => {
                    //Para limpar os dados do formulário
                    this.foto = new FotoComponent();
                    console.log("Dado adicionado com sucesso !!");
                },
                error => console.log(error)
            );
    }

}

//Um componente é dotado de dados, apresentação e comportamento. O primeiro comportamento do componente será o de cadastrar: