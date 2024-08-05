

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

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('projectBt');
const closeModalBtn = document.getElementById('closeModalBtn');
const projectSubmit = document.getElementById('projectSubmit')

openModalBtn.addEventListener('click', () => {
    modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
    modal.close();
});


projectSubmit.addEventListener('click', () => {

    const projectTitle = document.getElementById('title').value

    const projectDesc = document.getElementById('description').value

    const userProject = new project(projectTitle, projectDesc)

    console.log(userProject)

    storage.addProject(userProject)

    loadOneProject(userProject)

    modal.close();

    document.getElementById('title').value = ''

    document.getElementById('description').value = ''

});





