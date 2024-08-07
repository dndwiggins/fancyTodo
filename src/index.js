

import './style.css';

import { todo, loadTodos, loadOneTodo } from './todo';

import { project, loadProjects, loadOneProject } from './project';

import storage from './storage';

import loadHome from './loadHome';

const mainProj = new project('Trump', 'Biden');

const mainProj2 = new project('Obama', 'Harris');

const mainTodo = new todo('Testingsiaowdjoawid', 'Testing', 'whenever', 'now')

const mainTodo2 = new todo('Yo MAMAMAMA', 'TeDJWJDW', 'whenever', 'now')




//storage.loadStorage()

storage.addProject(mainProj);
storage.addProject(mainProj2);

mainProj.addTodo(mainTodo)
mainProj2.addTodo(mainTodo2)

loadProjects(storage)


loadHome()

loadHomeRun()


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

    storage.saveStorage()

    loadOneProject(userProject)

    modal.close();

    document.getElementById('title').value = ''

    document.getElementById('description').value = ''

});


function loadHomeRun() {


    const content = document.getElementById('content')

    const docTitle = document.createElement('h1')

    const docDesc = document.createElement('h1')

    docTitle.innerHTML = "Welcome to my fancy todo list app"

    docDesc.innerHTML = "Create and Delete Projects and add invidiual todos to each project and there is local storage!!"


    content.appendChild(docTitle)

    content.appendChild(docDesc)




}




