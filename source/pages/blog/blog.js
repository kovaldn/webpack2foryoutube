import './blog.scss';
import 'normalize.css';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js')