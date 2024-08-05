
import project from './project';


class todo {

    constructor(title, description, dueDate, priority) {

        this.title = title;
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.complete = false;
    }
    markComplete() {

        this.complete = true;
    }


    setPriority(priority) {

        this.priority = priority;

    }


}

//maybe should just load individual todo 

const loadTodos = (project) => { //takes a project and loads its todos 

    const content = document.getElementById('content');

    const addTodo = document.createElement('button')

    addTodo.innerHTML = "Add Todo"

    addTodo.addEventListener('click', function () {
        //add todo pop up window
        //const userTodo = new todo()

        //at the end load that one new todo aswell
        //loadOneTodo(userTodo)
    });

    content.appendChild(addTodo)

    project.todos.forEach(todo => {
        loadOneTodo(todo, project); //had to update this call
    });

}



const loadOneTodo = (todo, project) => {

    const content = document.getElementById('content');

    const todoContainer = document.createElement('div')

    const todoTitle = document.createElement('p')

    const todoDesc = document.createElement('p')

    const todoDate = document.createElement('p')

    const todoPri = document.createElement('p')

    //add complete part later

    const todoDel = document.createElement('button');

    todoContainer.className = 'todoContainer'

    todoTitle.innerHTML = todo.title;

    todoDesc.innerHTML = todo.description

    todoDate.innerHTML = todo.dueDate

    todoPri.innerHTML = todo.priority

    todoDel.innerHTML = 'Delete Item'

    todoDel.addEventListener('click', function (e) { //deletes a todo, needs to also delete todo from project array

        content.removeChild(todoContainer)
        project.removeTodo(todo)

    });


    content.appendChild(todoContainer)

    todoContainer.appendChild(todoTitle)
    todoContainer.appendChild(todoDesc)
    todoContainer.appendChild(todoDate)
    todoContainer.appendChild(todoPri)
    todoContainer.appendChild(todoDel)

}





export { todo, loadTodos, loadOneTodo }

