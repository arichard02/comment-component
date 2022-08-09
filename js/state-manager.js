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
  // 1. constructor method:
  //      sets up the datastore (this.comments array) and
  //      sets up the subscribers (this.subscribers array)
  constructor() {
    // this week: figuring out how to store and then reload
    // comments using indexDB.
    this.comments = [
      {
        name: "Doris Lawrence",
        email: "doris.lawrence@mymail.com",
        comment: "I am the Owner of TinyTot's Toyland!",
        timestamp: "7/30/2022 3:15:13PM",
      },
      {
        name: "James Johnson",
        email: "soliderguy@aol.com",
        comment: "I am a retired army veteran with over 20 years of service! ",
        timestamp: "8/3/2022 3:15:13PM",
      },
      {
        name: "Patricia Morrow",
        email: "schoolteacher@gmail.com",
        comment: "I love being a high school math teacher!",
        timestamp: "8/4/2022 3:15:13PM",
      },
      {
        name: "Micheal Davis",
        email: "micheal@davismail.com",
        comment: "I'm a professional personal chef! ",
        timestamp: "8/4/2022 3:15:13PM",
      },
    ];

    // mailing list.
    this.subscribers = [];
  }

  // 2. Method to add a new comment and to update
  //   subscribes who are listening to the
  //   "comment-added" event:
  addComment(newComment) {
    // "push" method of an array appends an items to the bottom -
    // adding a new comment object to the comment array
    this.comments.push(newComment);
    console.log(this.comments);
    // Now we to notify all the subscribers that a comment has been added
    // so that each subscribr can respond
    // to do this we are going to loop through each subscriber and invoke a callbak function

    // I need to be notify everyone that a "comment-updated" event has just
    // happened!
    // Q: Why do I notify?
    // A: My subscribers!!! (which are stored in this.subscribers (and array)
    //
    // Q: How do I notify them?
    // A: I trigger the function they told me to trigger.
    for (let i = 0; i < this.subscribers.length; i++) {
      const theEvent = this.subscribers[i][0];
      const theFunction = this.subscribers[i][1];
      if(theEvent=="add comment") {
          theFunction(this.comments);
      }

    //   const subscriber = this.subscribers[i];
    //   const eventName = subscriber[0];
    //   const f = subscriber[1];
    //   if (eventName === "comment-added") {
    //     console.log("notifying my subscriber");
    //     f(this.comments);
    //   }
    }
  }

  // 3. Method that allows other component to subscribe
  // to specific events, and which functions to invoke
  // when those events are triggered:
  subscribe(theEvent, theResponse) {
    // this code adds a list of two elements to the subscribers array
    // the first element is a string that indicates which event to subscriber is interested in
    // is interested in ...ie comment add, comment deleted
    // the second element is a function that will get invoked when the event happens
    this.subscribers.push([theEvent, theResponse]);
  }
}
