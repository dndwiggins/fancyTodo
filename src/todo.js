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




export default todo

