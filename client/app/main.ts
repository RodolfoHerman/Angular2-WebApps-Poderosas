//No arquivo 'systemjs.config.js' há algumas configurações da aplicação. Em packges informamos que o arquivo principal a ser carregado (carro chefe da aplicação) é o main.js (importa todas as dependências)

//O 'platformBrowserDynamic' possui um método responsável pelo carregamento da aplicação 'AppModule'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//Necessário importar o módulo que será carregado primeiro, no caso é o 'AppModule'
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//Após essa configuração é necessário informar ao loader qual o módulo deverá carregar. Ir para o arquivo index.html e passar a pasata do projeto 'app' como parâmetro 