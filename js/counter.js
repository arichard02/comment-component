export default class Counter {
    constructor(stateManager) {
        stateManager.subscribe( "comment-added", this.redraw.bind(this));
        // stateManager.subcriber("comment-added", this.greeting.bind(this));;

        this.redraw(stateManager.comments);
    }

    redraw(comments) {
        document.querySelector("counter-display").innerHTML = `
             <h2>${comments.length}</h2
        `;
    }

    // greeting function
    greeting() {
        console.log("Hello World!");
    }
}