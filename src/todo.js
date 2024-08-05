
import project, { clearContent } from './project';


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
    clearContent();

    const content = document.getElementById('content');

    const addTodo = document.createElement('button');

    addTodo.innerHTML = "Add Todo";

    const handleAddTodoClick = () => { //opens modal
        const modalTodo = document.getElementById('modalTodo');

        const closeModalBtnTodo = document.getElementById('closeModalBtnTodo');

        let todoSubmit = document.getElementById('todoSubmit');

        modalTodo.showModal();

        const closeModal = () => {

            modalTodo.close();

            closeModalBtnTodo.removeEventListener('click', closeModal);

        };

        closeModalBtnTodo.addEventListener('click', closeModal);

        const handleTodoSubmit = () => {
            const todoTitle = document.getElementById('titleTodo').value;
            const todoDesc = document.getElementById('descriptionTodo').value;
            const todoDate = document.getElementById('dueTodo').value;
            const todoPri = document.getElementById('priorityTodo').value;

            const userTodo = new todo(todoTitle, todoDesc, todoDate, todoPri);

            project.addTodo(userTodo);
            loadOneTodo(userTodo, project);

            modalTodo.close();

            document.getElementById('titleTodo').value = '';
            document.getElementById('descriptionTodo').value = '';
            document.getElementById('dueTodo').value = '';
            document.getElementById('priorityTodo').value = '';

            todoSubmit.removeEventListener('click', handleTodoSubmit);
        };

        // Remove existing event listeners before adding a new one
        todoSubmit.replaceWith(todoSubmit.cloneNode(true));
        todoSubmit = document.getElementById('todoSubmit');
        todoSubmit.addEventListener('click', handleTodoSubmit);
    };

    addTodo.addEventListener('click', handleAddTodoClick);
    content.appendChild(addTodo);

    project.todos.forEach(todo => {
        loadOneTodo(todo, project);
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

