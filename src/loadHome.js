import { clearContent } from "./project";


const homeBt = document.getElementById('homeBt')


function loadHome() {

    homeBt.addEventListener('click', function () {
        clearContent()

        const content = document.getElementById('content')

        const docTitle = document.createElement('h1')

        const docDesc = document.createElement('h1')

        docTitle.innerHTML = "Welcome to my fancy todo list app"

        docDesc.innerHTML = "Create and Delete Projects and add invidiual todos to each project and there is local storage!!"


        content.appendChild(docTitle)

        content.appendChild(docDesc)



    });
}

export default loadHome