import { todo, loadTodos } from './todo';

import { project, loadProjects } from './project';

import storage from './storage';

const mainProj = new project('Trump', 'Biden');

console.log(mainProj);

storage.addProject(mainProj);

console.log(storage)


storage.removeProject(mainProj)


console.log(storage)


