/*

Form component:
1. Draws the form.
2. Listens for the form submit
3. It creates a new comment object:

   {
        name: __________,
        email: _________,
        comment: _______, 
        timestamp: new Date()
   }

    and sends it to the state manager.
4. It clears out the form

*/


export default class Form {

    // what is a constructor?
    // brings the instance to life
    constructor(sm) {
        this.stateManager = sm;
        const formTemplate = `
        
        `;

        document.querySelector('.form-container').innerHTML = formTemplate;

        document.querySelector('form').addEventListener('submit', this.addComment.bind(this));
    }

    addComment (ev) {
        // goal of add comment is to let the state manager know
        // that a new comment has been added:
        ev.preventDefault();

        const date = new Date();
        let dateString = date.toLocaleDateString();
        dateString += " " + date.toLocaleTimeString();

        const commentObject = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            comment: document.querySelector('#comment').value, 
            timestamp: dateString
        }
        console.log(commentObject);


        // tell the state manager that we have
        // a new comment to add:
        this.stateManager.addComment(commentObject);


        // Your Job: how do you clear out your form!!

    }

}