

import './style.css';

import { todo, loadTodos, loadOneTodo } from './todo';

import { project, loadProjects, loadOneProject } from './project';

import storage from './storage';

const mainProj = new project('Trump', 'Biden');

const mainTodo = new todo('Testingsiaowdjoawid', 'Testing', 'whenever', 'now')

mainProj.addTodo(mainTodo)

loadOneProject(mainProj)


