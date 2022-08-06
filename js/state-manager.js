/*
The job of the state manager is to: 
    1. + organize the data.
    2. update the data when a component notifies the state manager.
    3. let other components know when the data has changed.


Each comment has:
    1. Name of the person
    2. Email
    3. Comment
    4. Timestamp
*/

export default class StateManager {
    constructor() {
        // this week: figuring out how to store and then reload
        // comments using indexDB.
        this.comments = [
            {
                name: "Julius",
                email: "julius@gmail.com",
                comment: "Here is my comment!",
                timestamp: "7/29/2022 3:15:13PM"
            },
            {
                name: "Adwaina",
                email: "adwaina@gmail.com",
                comment: "text text text text text text text text text text ",
                timestamp: "8/3/2022 3:15:13PM"
            },
            {
                name: "Monique",
                email: "mo@gmail.com",
                comment: "text text text text text text text text text text ",
                timestamp: "8/4/2022 3:15:13PM"
            }
        ]
    }

    // 2. we need a way to update the comments list
    addComment(newComment){
        this.comments.push(newComment);
        console.log(this.comments);
    }

    // 3. we need a way to tell the other components to redraw
}