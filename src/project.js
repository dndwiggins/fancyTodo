import todo from './todo';


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

export default project;