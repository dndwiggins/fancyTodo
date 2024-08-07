import todo from './todo';

import project from './project';




const storage = (function () {

    var projects = []

    const addProject = (project) => {

        projects.push(project)

    }

    const removeProject = (project) => {
        const index = projects.indexOf(project);
        if (index !== -1) {
            projects.splice(index, 1);
        } else {
            console.error('Project not found in the project');
        }

    }

    const loadStorage = () => {
        const storedProjects = JSON.parse(localStorage.getItem('projects'));
        if (storedProjects) {
            projects = storedProjects;
        }
    };

    const saveStorage = () => {
        localStorage.setItem('projects', JSON.stringify(projects));
    };



    return { projects, addProject, removeProject, loadStorage, saveStorage };
})();



export default storage;