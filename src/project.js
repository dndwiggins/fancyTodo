import todo, { loadTodos } from './todo';

import storage from './storage';

class project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todos = [];
    }

    addTodo(todo) {

        this.todos.push(todo);

    }

    removeTodo(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        } else {
            console.error('Todo not found in the project');
        }
    }




}



const loadProjects = () => {





}


const loadOneProject = (project) => {

    const projectContent = document.getElementById('projectContent')

    const projectContainer = document.createElement('div')

    const projectTitle = document.createElement('p')

    const projectDesc = document.createElement('p')

    const projectDel = document.createElement('button')

    projectContainer.className = 'projectContainer'

    projectTitle.innerHTML = project.title

    projectDesc.innerHTML = project.description

    projectDel.innerHTML = "Delete Project"

    projectContainer.addEventListener('click', function () {
        //clear content display, then fill with current todos 
        clearContent()
        loadTodos(project);
        //populate content display 


    });

    projectDel.addEventListener('click', function () {
        //del current project from DOM, call delete from database
        projectContentcontent.removeChild(projectContainer)
        storage.removeProject(project)

    });

    projectContent.appendChild(projectContainer)
    projectContainer.appendChild(projectTitle)
    projectContainer.appendChild(projectDesc)
    projectContainer.appendChild(projectDel)

}


function clearContent() {

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

}

export { loadOneProject, loadProjects, project, clearContent };
