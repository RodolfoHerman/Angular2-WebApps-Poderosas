import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

//Cria-se um array de rotas
const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    //O '**' significa quando o usuário acessar alguma rota inexistente ele será redirecionado
    //para a listagem pois foi definida como ''
    {path: '**', redirectTo: ''}
];

//Pedimos ao módulo 'RouterModule' contrua as rotas com base na configuração definida em 'appRoutes' e o resultado dessa operação 'routing' é realizado o import em 'app.module.ts'
export const routing = RouterModule.forRoot(appRoutes);

//Quando a aplicação Angular bootar, o primeiro componente a ser carregado será o AppComponent. Este componente deve configurar as rotas da aplicação, isto é, os endereços que correspondem aos componentes ListagemComponent e CadastroComponent. Quando determinada URL for acessada pelo browser, seu respectivo componente deve ser carregado e exibido para o usuário