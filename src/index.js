import './style.css';

import {Todo, TodoList} from './class';
import { crearTodoHtml } from './js/componentes';
//import {Todo} from './class/todo.class'
//import {TodoList} from './class/todo-list.class'

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
//tambien se puede, es igual: cuando es soloun argumento
/*todoList.todos.forEach(crearTodoHtml);*/

//const tarea = new Todo('Aprender javascript')

//console.log(todoList);

//crearTodoHtml(tarea);




//localStorage.setItem('mi-key', 'abc143');
//setTimeout (() => {
//    localStorage.removeItem('mi-key');
//},1500)