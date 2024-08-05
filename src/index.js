

import './style.css';

import { todo, loadTodos, loadOneTodo } from './todo';

import { project, loadProjects, loadOneProject } from './project';

import storage from './storage';

import loadHome from './loadHome';

const mainProj = new project('Trump', 'Biden');

const mainProj2 = new project('Obama', 'Harris');

const mainTodo = new todo('Testingsiaowdjoawid', 'Testing', 'whenever', 'now')

const mainTodo2 = new todo('Yo MAMAMAMA', 'TeDJWJDW', 'whenever', 'now')

loadHome()


storage.addProject(mainProj);
storage.addProject(mainProj2);

mainProj.addTodo(mainTodo)
mainProj2.addTodo(mainTodo2)

loadProjects(storage)





