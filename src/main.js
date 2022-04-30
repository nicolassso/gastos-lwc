import { createElement } from 'lwc';
import App from 'gastos/app';

const elm = createElement('gastos-app', { is: App });
document.body.appendChild(elm);
