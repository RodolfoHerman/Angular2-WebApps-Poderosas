import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';

//Validação orientada a modelo. FormGroup são os elementos do formulário. O FormBuilder constrói os elementos a serem validados e o Validators possui as validações do elemento, ex: Validators.required
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;

    constructor(private http: Http, fb: FormBuilder) {

        //Realizar a validação dos elementos do formulário através do atributo 'formControlName' que possui o mesmo nome das propriedades do objeto JSON passado como parâmetro para fb.group. O formControl do Angular  são os campos do formulário
        this.meuForm = fb.group({
            //Caso necessário adicionar vários validadores ao elemento utiliza-se o 'compose'
            titulo: ['', Validators.compose([
                Validators.required,
                Validators.minLength(4)
            ])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }


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