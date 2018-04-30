//Um componente é a unidade de código que encapsula os dados, o comportamento e a apresentação.
//Componentes podem ser combinados entre si para criar recursos mais complexos, no entanto fáceis de manter.
//Em Angular, um componente nada mais é do que uma classe (ES6)
//Um componente precisa ter um template que guarde sua apresentação, incluindo um seletor que é uma maneira de referenciá-lo no template de outros componentes.
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

}